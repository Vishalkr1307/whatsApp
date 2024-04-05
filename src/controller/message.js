const Message = require("..//module/message");
const User = require("../module/user");

const addMessage = async (req, res) => {
  try {
    const user = req.user;
    if (!user) {
      return res.status(404).send("User not found");
    }

    const message = await Message.create({ ...req.body, UserId: user.id });

    return res.status(200).send(message);
  } catch (err) {
    return res.status(500).send("bad request");
  }
};
const getMessage = async (req, res) => {
  try {
    const user = req.user;
    const message=await Message.findAll({
        include:[{
            model:User,
            attributes:['name']
        }]
    })
    return res.status(200).send(message)
    
    
  } catch (err) {
    console.log(err)
    
    return res.status(500).send("bad request");
  }
};
module.exports = { addMessage, getMessage };
