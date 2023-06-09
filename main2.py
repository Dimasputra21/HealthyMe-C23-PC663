from flask import Flask, request, jsonify, render_template
import numpy as np
import pandas as pd
import tensorflow as tf
# %matplotlib inline
from sklearn.model_selection import train_test_split

app = Flask(__name__)

def load_model():
    #memuat model
    try:
        #memuat model
        # model = tf.keras.models.load_model('')
        model = tf.lite.Interpreter(model_path='model.tflite')
        return model
    except Exception as e:
        #Penanganan kesalahan jika model tidak dapat dimuat
        return jsonify({
            "Model Tidak Terbaca"
        })

makanan = pd.read_csv('Dataset_Nutrisi_Makanan.csv')
users = pd.read_csv('data_user(2).csv')
print(users.columns)

def preprocess_data(makanan, users):
    Makanan = tf.data.Dataset.from_tensor_slices(dict(makanan))
    Users = tf.data.Dataset.from_tensor_slices(dict(users))

    users_1 = Users.map(lambda x: {
        "Nama_Makanan": x["Nama_Makanan"],
        "user_id": x["user_id"],
    })
    makanan_1 = Makanan.map(lambda x: x["Nama_Makanan"])

    All_Nama_Makanan = makanan_1.batch(1_000)
    user_ids = users_1.batch(1_000_000).map(lambda x: x["user_id"])

    Nama_Makanan_Unik = np.unique(np.concatenate(list(All_Nama_Makanan)))
    unique_user_ids = np.unique(np.concatenate(list(user_ids)))

    return Nama_Makanan_Unik, unique_user_ids

@app.route("/", methods=['GET'])
def root():
    if request.method == 'GET':
        return 'API Model ML Success, Siap Digunakan'

@app.route("/recommendation", methods=['POST'])
def predict():
    if request.method == 'POST':
        # Memeriksa tipe konten permintaan
        if request.headers['Content-Type'] != 'application/json':
            return jsonify({
                'Error': 'Masukkan Data dalam bentuk JSON'
            }), 400
        
        # Mengambil data JSON dari permintaan
        try:
            data = request.get_json()
        except Exception as e:
            return jsonify({
                'Error': 'Invalid JSON Data'
            }), 400
        
        # Memeriksa keberadaan dan format data yang diperlukan
        if 'Nama_Makanan' not in data:
            return jsonify({
                'Error': 'Isi Data Makanan'
            }), 400
        
        # Mendapatkan nilai-nilai dari data input
        Nama_Makanan = data['Nama_Makanan']

        # Memuat model
        model = load_model()

        if model is None:
            return jsonify({
                'Error': 'Gagal memuat model'
            }), 500

        model.allocate_tensors()

        input_index = model.get_input_details()[0]['index']
        output_index = model.get_output_details()[0]['index']
         
        # Menggabungkan data input dengan dataset pengguna
        input_data_merged = pd.DataFrame({'Nama_Makanan': [Nama_Makanan]})
        input_data_merged['user_id'] = input_data_merged['Nama_Makanan'].map(users.set_index('Nama_Makanan')['user_id'])
        merged_Data = pd.merge(input_data_merged, users, on='Nama_Makanan', how='left')

        # Memilih fitur-fitur yang akan digunakan untuk prediksi
        features = ['Nama_Makanan']
        selected_data = merged_Data[features]

        preprocessed_data = preprocess_data(makanan, selected_data)
        input_data_array = np.array(preprocessed_data, dtype=np.float32)
        model.set_tensor(input_index, input_data_array)
        model.invoke()
        output_data = model.get_tensor(output_index)
        recommendation_makanan = output_data.tolist()

        return jsonify ({
            'rekomendasi_makanan': recommendation_makanan
        })      

if __name__  == '__main__':
    app.run(host='127.0.0.1', port=8000, debug=True)
