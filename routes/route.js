import express from "express";
import { getUsers, register, login, logout, getUserById, changePass, editUser } from "../controller/usercontroller.js";
import { verifyToken } from "../middleware/verifytoken.js";
import { refreshToken } from "../controller/refreshtoken.js";

const router = express.Router();

router.get('/users', verifyToken, getUsers);
router.get('/users/:id', verifyToken, getUserById);
router.post('/register', register);
router.put('/ubahPassword/:id', verifyToken, changePass);
router.put('/editUser/:id', verifyToken, editUser);

router.post('/login', login);
router.get('/token', refreshToken);
router.delete('/logout', logout);


export default router;