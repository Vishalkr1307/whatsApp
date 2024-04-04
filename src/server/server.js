const app=require("..//index")
const db=require("..//config/db")
require("dotenv").config()

db.sync().then((res)=>{
    console.log("database sync successful")
}).catch((err)=>{
    console.log(err)
    console.log("database sync failed")
})
const port=process.env.PORT ||8000

app.listen(port,async ()=>{
    console.log(`listening on ${port}`)

})