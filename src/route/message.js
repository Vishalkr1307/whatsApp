const express=require("express")
const router=express.Router()
const {getMessage,addMessage}=require("..//controller/message")
const authonicate=require("..//middleware/authinocate")

router.post("/addMessage",authonicate,addMessage)
router.get("/getMessage",authonicate,getMessage)

module.exports = router