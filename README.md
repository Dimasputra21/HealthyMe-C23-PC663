# Projek Capstone (HealthyMe-C23-PC663) - BackEnd API untuk Model Machine Learning
Repository Projek Capstone HealthyMe (Aplikasi perekomendasi makanan sehat sesuai keinginanmu) - C23-PC663
---
## How to Access:
- Public Domain : https://healthyme2-4qh7a77q2a-et.a.run.app
---
## Endpoint URL Route (Dokumentasi)
- **REGISTER**
  * URL Route : /predict2/
  * Method : POST
  * Request Body : 
    * `Nama_Makanan` as STRING
                   
  * Response : 
    - Status : 200 (Success)
    ```
    {
    "Nama Makanan": {
        "satu": "pisang (100 g)",
        "dua": "Pir (100 g)",
        "tiga": "Semangka (100 g)"
       }
    }
    ```
    ```
    {
    "Nama Makanan": "Mie Shirataki (100 g)"
    }
    ```
    - Status : 400 (Bad Request)
    ```
    {
    "success": false,
    "statusCode": 400,
    "msg": "Mohon isi kolom nama makanan!"
    }
    ```
