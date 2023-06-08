from flask import Flask, request, jsonify, render_template
import numpy as np
import pandas as pd
import seaborn as sns
import tensorflow as tf
import matplotlib.pyplot as plt
# %matplotlib inline
from sklearn.model_selection import train_test_split

app = Flask(__name__)

def load_model():
    #memuat model
    try:
        #memuat model
        model = tf.keras.models.load_model('')
        return model
    except Exception as e:
        #Penanganan kesalahan jika model tidak dapat dimuat
        return None

makanan = pd.read_csv('dataset/Dataset_Nutrisi_Makanan.csv')
users = pd.read_csv('dataset/data_user.csv')

def preprocess_data(makanan, users):
    makanan = pd.read_csv('dataset/Dataset_Nutrisi_Makanan.csv')
    users = pd.read_csv('dataset/data_user.csv')

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
        return 'API INI BERJALAN DENGAN SUKSES'

@app.route("/recommendation", methods=['GET', 'POST'])
def predict():
    if request.method == 'GET':
       return 'Response Success'
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

        # Menggabungkan data input dengan dataset pengguna
        input_data = pd.DataFrame({'Nama_Makanan': [Nama_Makanan]})
        merged_Data = input_data.merge(users, on='user_id', how='left')

        # Memilih fitur-fitur yang akan digunakan untuk prediksi
        features = ['Nama_Makanan']
        selected_data = merged_Data[features]

        preprocessed_data = preprocess_data(selected_data)

        recommendation_makanan = model.predict(preprocessed_data)

        return jsonify ({
            'rekomendasi_makanan': recommendation_makanan.tolist()
        })      

if __name__  == '__main__':
    app.run(host='127.0.0.1', port=8000, debug=True)