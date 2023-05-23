import Users from "../model/usermodel.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getUsers = async (req, res) => {
    try {
        const users = await Users.findAll({
            attributes: ["id", "name", "email"]
        });
        res.json({
            success: true,
            statusCode: res.statusCode,
            users
        })
    } catch (error) {
        console.log(error)
    }
}

export const getUserById = async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await Users.findByPk(userId, {
            attributes: ["id", "name", "email"],
        });
        if (!user)
            return res.status(404).json({
                success: false,
                statusCode: res.statusCode,
                msg: "Data User Tidak Dapat Ditemukan"
            });
        res.json({
            success: true,
            statusCode: res.statusCode,
            msg: "User Ditemukan",
            user
        });
    } catch (error) {
        res.json({
            success: false,
            statusCode: res.statusCode,
            error: {
                msg: error.message,
                uri: req.originalUrl,
            },
        });
        console.log(error);
    }
}

export const register = async (req, res) => {
    const { name, email, password } = req.body;
    const user = await Users.findOne({
        where: {
            email: email,
        },
    });
    if (!name || !email || !password)
        return res.status(400).json({
            success: false,
            statusCode: res.statusCode,
            msg: "Mohon isi semua kolom!",
        });
    if (user)
        return res.status(400).json({
            success: false,
            statusCode: res.statusCode,
            msg: "Email sudah terdaftar, mohon pakai email lain!",
        });
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try {
        await Users.create({
            name: name,
            email: email,
            password: hashPassword,
        });
        res.json({
            success: true,
            statusCode: res.statusCode,
            msg: "Register Sukses"
        });
    } catch (error) {
        res.json({
            success: false,
            statusCode: res.statusCode,
            msg: "Register Gagal",
            error: {
                msg: error.massage,
                uri: req.originalUrl,
            },
        });
        console.log(error);
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await Users.findAll({
            where: {
                email: email,
            },
        });
        const match = await bcrypt.compare(password, user[0].password);
        if (!match)
            return res.status(400).json({
                success: false,
                statusCode: res.statusCode,
                msg: "Password Salah!",
            });
        const userId = user[0].id;
        const name = user[0].name;
        const userEmail = user[0].email;
        const accessToken = jwt.sign({ userId, name, userEmail }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: "2h"
        });
        const refreshToken = jwt.sign({ userId, name, userEmail }, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: "2d"
        });
        await Users.update({ refresh_token: refreshToken }, {
            where: {
                id: userId,
            }
        });
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
            // secure: true,
        });
        res.json({
            userId,
            name,
            userEmail,
            accessToken
        });
    } catch (error) {
        res.json({
            success: false,
            statusCode: res.statusCode,
            error: {
                msg: "Email tidak ditemukan, Register terlebih dahulu!",
                uri: req.originalUrl,
            },
        });
    }
}

export const changePass = async (req, res) => {
    const { id } = req.params;
    const { currentPass, newPass, confPass } = req.body

    try {
        const user = await Users.findByPk(id);
        if (!user) {
            return res.status(404).json({
                success: false,
                statusCode: res.statusCode,
                message: "User Tidak Dapat Ditemukan",
            });
        }
        const match = await bcrypt.compare(currentPass, user.password)
        if (!match) {
            return res.status(400).json({
                success: false,
                statusCode: res.statusCode,
                message: "Password Awal Salah",
            });
        };
        if (newPass !== confPass) {
            return res.status(400).json({
                success: false,
                statusCode: res.statusCode,
                msg: "Password baru dan Konfirmasi Password Tidak Sesuai"
            });
        }
        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(newPass, salt);
        await user.update({
            password: hashPassword,
        });
        res.json({
            success: true,
            statusCode: res.statusCode,
            msg: "Perubahan Password Berhasil"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            statusCode: res.statusCode,
            msg: error.message,
        });
        console.log(error);
    }
}

export const editUser = async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;

    try {
        const user = await Users.findByPk(id);
        if(!user) {
            return res.status(404).json({
                success: false,
                statusCode: res.statusCode,
                msg: "User Tidak Dapat Ditemukan"
            });
        }
        await user.update({
            name,
            email,
        });
        res.json({
            success: true,
            statusCode: res.statusCode,
            msg: "Perubahan Berhasil"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            statusCode: res.statusCode,
            msg: error.message,
        });
        console.log(error);
    }
}

export const logout = async (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(204);
    const user = await Users.findAll({
        where: {
            refresh_token: refreshToken
        }
    });
    if (!user[0]) return res.sendStatus(204);
    const userId = user[0].id;
    await Users.update({ refresh_token: null }, {
        where: {
            id: userId
        }
    });
    res.clearCookie('refreshToken');
    return res.json({
        success: true,
        statusCode: res.statusCode,
        msg: "Logout Berhasil"
    });
}