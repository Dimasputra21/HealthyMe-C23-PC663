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
  * Request Body : name as STRING
                   email as STRING (unique)
                   password as STRING
                   
 * Response : 
    - Status : 200 (Success)
    ```
    {
      success: true,
      statusCode: res.statusCode,
      msg: "Register Sukses"
    }
    ```
