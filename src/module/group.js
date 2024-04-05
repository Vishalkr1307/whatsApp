const { Sequelize, DataTypes } = require("sequelize");
const db = require("../config/db");

const Group = db.define("Group", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    groupName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
    }
});

const GroupUser = db.define("GroupUser", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }
});




module.exports = { Group, GroupUser };
