import express  from "express";
import db from "./config/database.js";
import router from "./routes/route.js";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
dotenv.config();
const app = express();

try {
    await db.authenticate();
    console.log('Database Connected...');
} catch (error) {
    console.error(error);
}

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Response Success!, API Siap digunakan")
});

app.use(router)

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server Running at Port ${port}`);
})
