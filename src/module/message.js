const {Sequelize, DataTypes}=require("sequelize")
const db=require("..//config/db")

const Message=db.define("Message",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
    message:{
        type:DataTypes.TEXT,
        allowNull:false
    }
})
module.exports=Message