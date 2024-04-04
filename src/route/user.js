const express=require("express")
const router=express.Router()
const {nameChain,emailChain,passwordChain}=require("..//util/valdation")
const {Register}=require("..//controller/user")

router.post('/register',nameChain(),emailChain(),passwordChain(),Register)


module.exports = router