const express=require("express")
const router=express.Router()
const {Group,GroupUser}=require("..//module/group")
const Authioncate=require("..//middleware/authinocate")
const {addGroup,addGroupMember,addGroupMessage,getGroup,getGroupMember,getGroupMessage}=require("..//controller/group")


router.post("/addGroup",Authioncate,addGroup)
router.post("/groupMember/:groupId",Authioncate,addGroupMember)
router.post("/groupMessage/:groupId",Authioncate,addGroupMessage)
router.get("/getGroupMessage/:groupId",Authioncate,getGroupMessage)
router.get("/getGroup",Authioncate,getGroup)
router.get("/getGroupMember/:groupId",Authioncate,getGroupMember)

module.exports=router