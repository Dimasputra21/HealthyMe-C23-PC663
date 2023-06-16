# Projek Capstone (HealthyMe-C23-PC663) - BackEnd API untuk Model Machine Learning
Repository Projek Capstone HealthyMe (Aplikasi perekomendasi makanan sehat sesuai keinginanmu) - C23-PC663
---
## How to Access / use:
- in Local host you can run on Python Environment with local IP and port 8000 http://localhost:8000
- Public Domain : https://healthyme2-4qh7a77q2a-et.a.run.app
---
## Endpoint URL Route (Dokumentasi), (untuk dokumentasi versi POSTMAN bisa dilihat disini : https://documenter.getpostman.com/view/26430352/2s93m8zgLP )
- **REGISTER**
  * URL Route : /predict2/
  * Method : POST
  * Request Body : 
    * `Nama_Makanan` as STRING
                   
  * Response : 
    - Status : 200 (Success)
    ```
    {
    "Nama_Makanan": "Mie Shirataki (100 g)"
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
