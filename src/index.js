const express=require("express");
const app=express()
const path=require("path");
const cors=require("cors")

const User=require("./route/user")
app.use(express.json())
const allowedOrigins = ['htpp://localhost:2345'];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
  credentials: true 
};
app.use(cors())
app.use(express.static(path.join(__dirname,'views')))
app.use("/auth",User)







app.get("/", (req, res) => {
    
    res.sendFile(path.join(__dirname,'views','navbar.html'))
})



module.exports=app