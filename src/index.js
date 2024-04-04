const express=require("express");
const app=express()
const path=require("path");
const User=require("./route/user")
app.use(express.json())
app.use(express.static(path.join(__dirname,'views')))
app.use("/auth",User)







app.get("/", (req, res) => {
    
    res.sendFile(path.join(__dirname,'views','navbar.html'))
})



module.exports=app