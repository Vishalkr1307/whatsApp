const User=require("..//module/user")
const {formatOfError}=require("..//util/valdation")
const {validationResult}=require("express-validator")
const bcrypt=require("bcrypt")
const {newToken,verifyaToken}=require("..//util/token")

const Register=async (req,res)=>{
    try{
        
        const error=validationResult(req)
        if(!error.isEmpty()){
            return res.status(401).send(formatOfError(error.array()).join(","))

        }
        const user=await User.create(req.body)
        return res.status(201).send(user)

    }
    catch(err){
        return res.status(500).send("Bad Request");
    }
}
const Login=async (req,res)=>{
    try{
        const error=validationResult(req)
        if(!error.isEmpty()){
            return res.status(404).send(formatOfError(error.array()).join(","))
        }
        const user=req.user
        
        const matchPassword=bcrypt.compareSync(req.body.password,user.password)
        if(!matchPassword){
            return res.status(401).send("Password is incorrect")

        }
        const token=newToken(user)
        return res.status(200).send(token)



    }
    catch(err){
        return res.status(500).send("bad request")

    }
}
const allUser=async (req,res)=>{
    try{
        const user=await User.findAll()
        return res.status(200).send(user)

    }
    catch(err){
        return res.status(500).send("bad request");
    }
}
const Profile=async (req, res) => {
    try{
        const user=await verifyaToken(req.body.token)
        if(new Date(user.exp).getTime()<new Date(Date.now()).getTime()){
            return res.status(401).send("Your Token has expired")

        }

        return res.status(200).send(user.user)

    }
    catch(err){
        return res.status(500).send("Bad request");
    }
}
module.exports={Register,Login,allUser,Profile}