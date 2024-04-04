const express=require("express")
const router=express.Router()
const {nameChain,emailChain,passwordChain,loginEmailChain}=require("..//util/valdation")
const {Register,Login}=require("..//controller/user")

router.post('/register',nameChain(),emailChain(),passwordChain(),Register)
router.post('/login',loginEmailChain(),Login)


module.exports = router