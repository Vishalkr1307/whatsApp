const { body } = require("express-validator");
const User = require("../module/user");
const formatOfError = (errorOfArray) => {
  return errorOfArray.map((err) => err.msg);
};
const nameChain = () =>
  body("name")
    .notEmpty()
    .withMessage("name is not empty")
    .isString("it must be a string");
const emailChain = () =>body("email").notEmpty().withMessage("email doest not empty").isEmail().withMessage("it must be a Email address").custom(async (val)=>{
    const user=await User.findOne({
        where:{
            email:val
        }
    })
    if(user){
        throw new Error ("User already exists")
    }
    
})
  
   
    
    
    
const passwordChain = () =>
  body("password")
    .notEmpty()
    .isString()
    .isLength({ min: 5 })
    .withMessage("Password atleast 5 characters")
    .custom(async (val) => {
        
      if (val.charCodeAt(0) >= 97 && val.charCodeAt(0) <= 122 || val.charCodeAt(0)>=47 && val.charCodeAt(0)<=55) {
        throw new Error("First character must be a UpperCase character");
      }
    });

module.exports = { nameChain, emailChain, passwordChain, formatOfError };
