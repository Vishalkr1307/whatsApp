const User=require("..//module/user")
const {formatOfError}=require("..//util/valdation")
const {validationResult}=require("express-validator")

const Register=async (req,res)=>{
    try{
        
        const error=validationResult(req)
        if(!error.isEmpty()){
            return res.status(400).send(formatOfError(error.array()).join(","))

        }
        const user=await User.create(req.body)
        return res.status(200).send(user)

    }
    catch(err){
        return res.status(500).send("Bad Request");
    }
}

module.exports={Register}