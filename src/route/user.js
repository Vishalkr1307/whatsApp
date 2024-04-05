const express=require("express")
const router=express.Router()
const {nameChain,emailChain,passwordChain,loginEmailChain}=require("..//util/valdation")
const {Register,Login,allUser,Profile}=require("..//controller/user")
const authonicate=require("..//middleware/authinocate")

router.post('/register',nameChain(),emailChain(),passwordChain(),Register)
router.post('/login',loginEmailChain(),Login)
router.get('/allUser',authonicate,allUser)
router.post("/profile",Profile)


module.exports = router