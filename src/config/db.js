
const {Sequelize}=require("sequelize")
require("dotenv").config()
databse=process.env.DATABASE
username=process.env.USERNAME
password=process.env.PASSWORD

const db=new Sequelize(databse,username,password,{
    host:"localhost",
    dialect:'mysql'
})

module.exports=db