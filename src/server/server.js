const app=require("..//index")
const db=require("..//config/db")
const userSchema=require("..//module/user")
const messageSchema=require("..//module/message")
require("dotenv").config()

const port=process.env.PORT ||8000
userSchema.hasMany(messageSchema)
messageSchema.belongsTo(userSchema)

db.sync().then((res)=>{
    console.log("database sync successful")
    app.listen(port,async ()=>{
        console.log(`listening on ${port}`)
    
    })
}).catch((err)=>{
    
    console.log("database sync failed")
})



