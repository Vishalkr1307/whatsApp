const express=require("express");
const app=express()
const path=require("path");
app.use(express.json())
app.use(express.static(path.join(__dirname,'views')))







app.get("/", (req, res) => {
    
    res.sendFile(path.join(__dirname,'views','navbar.html'))
})



module.exports=app