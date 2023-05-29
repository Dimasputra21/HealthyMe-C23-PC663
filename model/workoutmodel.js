import { Sequelize } from "sequelize";
// import db from "../config/database.js";
// import Users from "./usermodel.js";
// import { nanoid } from "nanoid";

// const { DataTypes } = Sequelize;

// const Workout = db.define (
//     "workout",
//     {
//         id: {
//             type: DataTypes.STRING,
//             primaryKey: true,
//             defaultValue: () => `workout-${nanoid(10)}`
//         },
//         name_workout: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         tipe_workout: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//         kalori: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//         },
//         photo: {
//             type: DataTypes.TEXT
//         },
//     },
//     {
//         timestamps: false,
//     }
// );

// Users.hasMany(Workout, {
//     foreignKey: "userId",
//     as: "workouts",
// });

// Workout.belongsTo(Users, {
//     foreignKey: "userId",
//     as: "user",
// });

// export default Workout;