import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Users from "./usermodel.js";
import { nanoid } from "nanoid";


const { DataTypes } = Sequelize;

const Makanan = db.define(
    "makanan",
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            defaultValue: () => `food-${nanoid(10)}`,
        },
        name_food: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        kalori: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        protein: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lemak: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sodium: {
            type: DataTypes.STRING,
            allowNull: false
        },
        link_nutrisi: {
            type: DataTypes.STRING,
            allowNull: false
        },
        link_resep: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ManisAsin: {
            type: DataTypes.STRING,
            defaultValue: "Manis"
        },
        KuahKering: {
            type: DataTypes.STRING,
            defaultValue: "Kering"
        },
        PedasTidak: {
            type: DataTypes.STRING,
            defaultValue: "Tidak Pedas"
        },
        tipeMakananVSD: {
            type: DataTypes.STRING,
            allowNull: true
        },
        HalalHaram: {
            type: DataTypes.STRING,
            defaultValue: "Halal"
        },
    },
    {
        freezeTableName: true,
    },
);

Users.hasMany(Makanan, {
    foreignKey: "userId",
    as: "foods",
});

Makanan.belongsTo(Users, {
    foreignKey: "userId",
    as: "user",
});

export default Makanan;
