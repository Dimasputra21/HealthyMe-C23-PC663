import Users from "../model/usermodel.js";
import Makanan from "../model/makananmodel.js";
import { Op } from "sequelize";

export const getMakanan = async (req, res) => {
    try {
        const getPagination = (page, size) => {
            const limit = size ? +size : 2;
            const offset = page ? page * limit : 0;

            return { limit, offset };
        };
        const getPagingData = (data, page, limit) => {
            const { count: totalItems, rows: Makanan } = data;
            const currentPage = page ? +page : 0;
            const totalPages = Math.ceil(totalItems / limit);

            return { totalItems, Makanan, totalPages, currentPage };
        };
        const { page, size, id } = req.query;
        var condition = id ? { id: { [Op.like]: `%${id}%` } } : null;

        const { limit, offset } = getPagination(page, size);
        Makanan.findAndCountAll({
            where: condition, limit, offset,
            attributes: ["id", "name_food", "kalori", "protein", "lemak", "sodium", "link_nutrisi", "link_resep"]
        })
            .then(data => {
                const response = getPagingData(data, page, limit);
                res.json({
                    success: true,
                    statusCode: res.statusCode,
                    msg: "Berhasil mendapatkan data semua makanan",
                    response
                });
            })
    } catch (error) {
        console.log(error);
    }
}

export const getMakananById = async (req, res) => {
    const makananId = req.params.id;
    try {
        const makanan = await Makanan.findByPk(makananId, {
            attributes: ["id", "name_food", "kalori", "protein", "lemak", "sodium", "link_nutrisi", "link_resep"]
        });
        if (!makanan)
            return res.status(404).json({
                success: false,
                statusCode: res.statusCode,
                msg: "Makanan Tidak Tersedia"
            });
        res.json({
            success: true,
            statusCode: res.statusCode,
            msg: "Makanan Berhasil Ditemukan",
            makanan,
        });
    } catch (error) {
        console.log(error);
    }
}

export const createNewMakanan = async (req, res) => {
    const { userId } = req.params;
    const { name_food, kalori, protein, lemak, sodium,
        link_nutrisi, link_resep, ManisAsin, KuahKering, PedasTidak,
        tipeMakananVSD, HalalHaram } = req.body;

    if (!name_food || !kalori || !protein || !lemak || !sodium || !link_nutrisi ||
        !link_resep)
        return res.status(400).json({
            success: false,
            statusCode: res.statusCode,
            msg: "Harap masukkan data secara lengkap"
        });

    try {
        const user = await Users.findOne(userId);
        const makanan_check = await Makanan.findOne({
            where: {
                name_food: name_food,
            },
        });
        const manisAsin = "Manis";
        const kuahKering = "Kering";
        const pedasTidak = "Tidak Pedas";
        const halalHaram = "Halal";
        if (!user) {
            return res.status(404).json({
                success: false,
                statusCode: res.statusCode,
                msg: "User Tidak Ditemukan!"
            });
        }
        if (makanan_check)
            return res.status(400).json({
                success: false,
                statusCode: res.statusCode,
                msg: "Nama Makanan Sudah Pernah digunakan, Berikan Perbedaan!",
            });
        const makanan = await Makanan.create({
            name_food: name_food,
            kalori: kalori,
            protein: protein,
            lemak: lemak,
            sodium: sodium,
            link_nutrisi: link_nutrisi,
            link_resep: link_resep,
            ManisAsin: ManisAsin,
            KuahKering: KuahKering,
            PedasTidak: PedasTidak,
            tipeMakananVSD: tipeMakananVSD,
            HalalHaram: HalalHaram,
            userId
        });

        res.status(201).json({
            success: true,
            statusCode: res.statusCode,
            msg: "Makanan baru berhasil dibuat",
            makanan,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            statusCode: 500,
            error: {
                msg: error.message,
            },
        });
    }
} 