// import Users from "../model/usermodel.js";
// // import Makanan from "../model/makananmodel.js";

// export const getWorkout = async (req, res) => {
//     try {
//         const makanan = await Makanan.findAll({
//             attributes: ["id", "name_food", "kalori", "protein", "lemak", "sodium", "link_nutrisi", "link_resep"]
//         });
//         res.json({
//             success: true,
//             statusCode: res.statusCode,
//             msg: "Berhasil mendapatkan data semua makanan",
//             makanan,
//         })
//     } catch (error) {
//         console.log(error);
//     }
// }

// export const getWorkoutById = async (req, res) => {
//     const makananId = req.params.id;
//     try {
//         const makanan = await Makanan.findByPk(makananId, {
//             attributes: ["id", "name_food", "kalori", "protein", "lemak", "sodium", "link_nutrisi", "link_resep"]
//         });
//         if (!makanan)
//             return res.status(404).json({
//                 success: false,
//                 statusCode: res.statusCode,
//                 msg: "Makanan Tidak Tersedia"
//             });
//         res.json({
//             success: true,
//             statusCode: res.statusCode,
//             msg: "Makanan Berhasil Ditemukan",
//             makanan,
//         });
//     } catch (error) {
//         console.log(error);
//     }
// }

// export const createNewWorkout = async (req, res) => {
//     const userId = req.params.userId;
//     const { name_food, kalori, protein, lemak, sodium,
//         link_nutrisi, link_resep, isAsin, isKering, isPedas, tipe_makanan, is_halal } = req.body;

//     if (!name_food || !kalori || !protein || !lemak || !sodium || !link_nutrisi || !link_resep)
//         return res.status(400).json({
//             success: false,
//             statusCode: res.statusCode,
//             msg: "Harap masukkan data secara lengkap"
//         });

//     try {
//         const user = await Users.findByPk(userId);
//         if (!user) {
//             return res.status(404).json({
//                 success: false,
//                 statusCode: res.statusCode,
//                 msg: "User Tidak Ditemukan!"
//             });
//         }
//         const makanan = await Makanan.create({
//             name_food, kalori, protein, lemak, sodium, link_nutrisi, link_resep, userId
//         });

//         res.status(201).json({
//             success: true,
//             statusCode: res.statusCode,
//             msg: "Makanan baru berhasil dibuat",
//             makanan,
//         });
//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             statusCode: 500,
//             error: {
//                 msg: error.message,
//             },
//         });
//     }
// } 