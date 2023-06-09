# HealthyMe-C23-PC663 - API
Repository Projek Capstone HealthyMe (Aplikasi perekomendasi makanan sehat sesuai keinginanmu) - C23-PC663

---

## How to Use
- in Local host you can run on NodeJs Environment with local IP and port 5000 http://localhost:5000
- Public Domain : 
  - App Engine : https://healthyme-auth.et.r.appspot.com atau https://healthyme-projectc23.appspot.co
  - Cloud Run : https://backenduser-4qh7a77q2a-et.a.run.app
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
 
- **LOGIN**
  * URL Route : /login/
  * Method : POST
  * Request Body :
    * `email` as String
    * `password` as String
         
  * Response :
    - Status : 200 (Success)
    ```
    {
     "userId": "user-nEDmB38XF4",
     "name": "dimas",
     "userEmail": "dimas@gmail.com",
     "accessToken":   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1c2VyLW5FRG1CMzhYRjQiLCJuYW1lIjoiZGltYXMiLCJ1c2VyRW1haWwiOiJkaW1hc0BnbWFpbC5jb20iLCJpYXQiOjE2ODQ4MjI1MjQsImV4cCI6MTY4NDgyOTcyNH0.ej7xtO-_M4ec4nSoVlJrA9jiUd2GlvSxS3GZ-aatVA8"
    }
    ```
    - Status : 400 (Bad Request)
    ```
    {
     "success": false,
     "statusCode": 400,
     "msg": "Password Salah!",
    }
    ```
    ```
    {
     "success": false,
     "statusCode": 400,
     "error": {
        "msg": "Email tidak ditemukan, Register terlebih dahulu!",
        "uri": /login
        }
    }
    ```
    
- **GET ALL USERS**
  * URL Route : /users/
  * Method : GET,
  * Headers (Middleware)
    - `Authorization` : `Bearer Token`
    
  * Response : 
    - Status : 200 (Success)
    ```
    {
     "success": true,
     "statusCode": 200,
     "users": [
       {
         "id": "user-nEDmB38XF4",
         "name": "dimas",
         "email": "dimas@gmail.com"
       },
       {
         "id": "user-XYs03d_yrl",
         "name": "g",
         "email": "tidakada@gmail.com"
       }
     ]
    }
    ```
    - Status : 401 (Unauthorized)
    ```
    Unauthorized
    ```
    
- **GET USER BY ID**
  * URL Route : /users/:id
  * Method : GET
  * Headers (Middleware)
    - `Authorization` : `Bearer Token`
   
  * Response : 
    - Status : 200 (Success)
    ```
    {
      "success": true,
      "statusCode": 200,
      "msg": "User Ditemukan",
      "user": {
         "id": "user-nEDmB38XF4",
         "name": "dimas",
         "email": "dimas@gmail.com"
         }
    }
    ```
    - Status : 401 (Unauthorized)
    ```
    Unauthorized
    ```
    - Status : 404 (Not Found)
    ```
    {
     "success": false,
     "statusCode": 404,
     "msg": "Data User Tidak Dapat Ditemukan"
    }
    ```
    
- **CHANGE PASSWORD**
  * URL Route : /ubahPassword/:id
  * Method : PUT
  * Headers (Middleware)
    - `Authorization` : `Bearer Token`
  * Request Body : 
    * `currentPass` as String
    * `newPass` as String
    * `confPass` as String
  * Response : 
  
    - Status : 200 (Success)
    ```
    {
     "success": true,
     "statusCode": 200,
     "msg": "Perubahan Password Berhasil"
    }
    ```
    - Status : 400 (Bad Request)
    ```
    {
     "success": false,
     "statusCode": 400,
     "message": "Password Awal Salah"
    }
    ```
    ```
    {
     "success": false,
     "statusCode": 400,
     "msg": "Password baru dan Konfirmasi Password Tidak Sesuai"
    }
    ```
    - Status : 404 (Not Found)
    ```
    {
     "success": false,
     "statusCode": 404,
     "message": "User Tidak Dapat Ditemukan",
    }
    ```
    
- **EDIT DATA USER**
  * URL Route : /editUser/:id
  * Method : PUT
  * Headers (Middleware)
    - `Authorization` : `Bearer Token`
  * Request Body : 
    * `name` as String
    * `email` as String
  * Response : 
  
    - Status : 200 (Success)
    ```
    {
     "success": true,
     "statusCode": 200,
     "msg": "Perubahan Berhasil"
    }
    ```
    - Status : 404 (Not Found)
    ```
    {
     "success": false,
     "statusCode": res.statusCode,
     "msg": "User Tidak Dapat Ditemukan"
    }
    ```
    
- **GET ALL MAKANAN WITH PAGINATION**
  * URL ROUTE : /makanan
    - `Pagination (note: if want to change page with route format: '/makanan?page=(...)&size=2' )`
  * Method : GET
  * Headers (Middleware)
    - `Authorization` : `Bearer Token`
  * Response : 
  
    - Status : 200 (Success)
    ```
    {
     "success": true,
     "statusCode": 200,
     "msg": "Berhasil mendapatkan data semua makanan",
     "response": {
        "totalItems": 7,
        "Makanan": [
            {
                "id": "food-5gdAyDQ_8a",
                "name_food": "Sate Padang",
                "kalori": "870",
                "protein": "569",
                "lemak": "596",
                "sodium": "2000",
                "link_nutrisi": "https://www.sate.com",
                "link_resep": "https://www.sate.com"
            },
            {
                "id": "food-bz5XKXqmo_",
                "name_food": "Oatmeal Instan (100 g)",
                "kalori": "91",
                "protein": "2.46",
                "lemak": "1.2",
                "sodium": "122",
                "link_nutrisi": "https://www.fatsecret.co.id/kalori-gizi/umum/oatmeal-instan?portionid=53170&portionamount=100,000",
                "link_resep": "https://www.sehatq.com/review/variasi-resep-oatmeal-antibosan-untuk-turunkan-berat-badan"
            },
            {
                "id": "food-fexF6ed9yr",
                "name_food": "Rawon Babi",
                "kalori": "800",
                "protein": "399",
                "lemak": "888",
                "sodium": "290",
                "link_nutrisi": "https://www.rawon.com",
                "link_resep": "https://www.rawon.com"
            }
        ],
        "totalPages": 3,
        "currentPage": 0
      }
    }
    ```

- **GET MAKANAN BY ID**
  * URL Route : /makanan/:id
  * Method : GET
  * Headers (Middleware)
    - `Authorization` : `Bearer Token`
  * Response : 

    - Status : 200 (Success)
    ```
    {
      "success": true,
      "statusCode": 200,
      "msg": "Makanan Berhasil Ditemukan",
      "makanan": {
        "id": "food-mpR5pAdys4",
        "name_food": "Rawon",
        "kalori": "800",
        "protein": "399",
        "lemak": "888",
        "sodium": "290",
        "link_nutrisi": "https://www.rawon.com",
        "link_resep": "https://www.rawon.com"
      }
    }
    ```
    - Status : 404 (Not Found)
    ```
    {
      "success": false,
      "statusCode": 404,
      "msg": "Makanan Tidak Tersedia"
    }
    ```
  
- **CREATE MAKANAN**
  * URL Route : /logout/
  * Method : DELETE
  * Headers (Middleware)
    - `Authorization` : `Bearer Token`
  * Response :
  
    - Status : 200 (Success)
    ```
    {
      "success": true,
      "statusCode": 201,
      "msg": "Makanan baru berhasil dibuat",
      "makanan": {
        "id": "food-rx716UCg9H",
        "name_food": "Rawon Makassar",
        "kalori": "800",
        "protein": "399",
        "lemak": "888",
        "sodium": "290",
        "link_nutrisi": "https://www.rawon.com",
        "link_resep": "https://www.rawon.com",
        "ManisAsin": "Asin",
        "KuahKering": "Kuah",
        "PedasTidak": "Pedas",
        "HalalHaram": "Haram",
        "updatedAt": "2023-05-29T04:52:55.749Z",
        "createdAt": "2023-05-29T04:52:55.749Z"
      }
    }
    ```
    - Status : 400 (Bad Request)
    ```
    {
      "success": false,
      "statusCode": 400,
      "msg": "Harap masukkan data secara lengkap"
    }
    ```
    ```
    {
      "success": false,
      "statusCode": 400,
      "msg": "Nama Makanan Sudah Pernah digunakan, Berikan Perbedaan!"
    }
    ```
    - Status : 401 (Unauthorized)
    ```
    Unauthorized
    ```
    - Status : 403 (Forbidden)
    ```
    Forbidden
    ```
    - Status : 404 (Not Found)
    ```
    {
      "success": false,
      "statusCode": 400,
      "msg": "User Tidak Ditemukan!"
    }
    ```
    
- **LOGOUT**
  * URL Route : /logout/
  * Method : DELETE
  * Headers (Middleware)
    - `Authorization` : `Bearer Token`
  * Response :
    
    - Status : 200 (Success)
    ```
    {
     "success": true,
     "statusCode": res.statusCode,
     "msg": "Logout Berhasil"
    }
    ```
    
