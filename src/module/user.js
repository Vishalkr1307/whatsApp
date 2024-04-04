const {Sequelize,DataTypes}=require("sequelize")
const db=require("..//config/db")
const bcrypt=require("bcrypt")

const User=db.define("User",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true

    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
        set(val){

            this.setDataValue("password", bcrypt.hashSync(val,8));
        }
    }
})

module.exports =User