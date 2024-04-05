const app=require("..//index")
const db=require("..//config/db")
const userSchema=require("..//module/user")
const messageSchema=require("..//module/message")
const {Group,GroupUser}=require("..//module/group")
require("dotenv").config()

const port=process.env.PORT ||8000
userSchema.hasMany(messageSchema)
messageSchema.belongsTo(userSchema)
Group.belongsToMany(userSchema,{through:GroupUser})
userSchema.belongsToMany(Group,{through:GroupUser})

db.sync().then((res)=>{
    console.log("database sync successful")
    app.listen(port,async ()=>{
        console.log(`listening on ${port}`)
    
    })
}).catch((err)=>{
    console.log(err)
    console.log("database sync failed")
})



