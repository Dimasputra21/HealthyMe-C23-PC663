# Projek Capstone (HealthyMe-C23-PC663) - BackEnd API untuk Model Machine Learning
Repository Projek Capstone HealthyMe (Aplikasi perekomendasi makanan sehat sesuai keinginanmu) - C23-PC663
---
## How to Access:
- Public Domain : https://healthyme2-4qh7a77q2a-et.a.run.app
---
## Endpoint URL Route (Dokumentasi), (untuk dokumentasi versi POSTMAN bisa dilihat disini : .. )
- **REGISTER**
  * URL Route : /register/
  * Method : POST
  * Request Body : 
    * `name` as STRING
    * `email` as STRING (unique)
    * `password` as STRING
                   
  * Response : 
    - Status : 200 (Success)
    ```
    {
      "success": true,
      "statusCode": 200,
      "msg": "Register Sukses"
    }
    ```
    - Status : 400 (Bad Request)
    ```
    {
     "success": false,
     "statusCode": 400,
     "msg": "Mohon isi semua kolom!"
    }
    ```
    ```
    {
     "success": false,
     "statusCode": 400,
     "msg": "Email sudah terdaftar, mohon pakai email lain!",
    }
    ```
