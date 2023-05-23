# HealthyMe-C23-PC663
Repository Projek Capstone HealthyMe (Aplikasi perekomendasi makanan sehat sesuai keinginanmu) - C23-PC663

---

## How to Use
- in Local host you can run on NodeJs Environment with local IP and port 5000 http://localhost:5000
- Public Domain : healthyme-auth.et.r.appspot.com

---

## Endpoint URL Route
- **REGISTER**
  * URL Route : /register/
  * Method : POST
  * Request Body : - name as STRING
                   - email as STRING (unique)
                   - password as STRING
                   
  * Response : 
    - Status : 200 (Success)
    ```
    {
      success: true,
      statusCode: 200,
      msg: "Register Sukses"
    }
    ```
    - Status : 400 (Bad Request)
    ```
    {
     success: false,
     statusCode: 400,
     msg: "Mohon isi semua kolom!"
    }
    ```
    ```
    {
     success: false,
     statusCode: 400,
     msg: "Email sudah terdaftar, mohon pakai email lain!",
    }
    ```
 
- **LOGIN**
  * URL Route : /login/
  * Method : POST
  * Request Body : - email as String
                   - password as String
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
     success: false,
     statusCode: 400,
     msg: "Password Salah!",
    }
    ```
    ```
    {
     success: false,
     statusCode: 400,
     error: {
        msg: "Email tidak ditemukan, Register terlebih dahulu!",
        uri: /login
        }
    }
    ```
