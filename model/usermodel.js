import { Sequelize } from "sequelize";
import db from "../config/database.js";
import { nanoid } from "nanoid";

const { DataTypes } = Sequelize;

const Users = db.define(
    "users",
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            defaultValue: () => `user-${nanoid(10)}`,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        refresh_token: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    },
    {
        freezeTableName: true,
    }
);

export default Users;