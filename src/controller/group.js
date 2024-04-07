const User = require("..//module/user");
const { Group, GroupUser, GroupMessage } = require("..//module/group");

const addGroup = async (req, res) => {
  try {
    const user = req.user;
    const group = await Group.create({ ...req.body, AdminId: user.id });

    return res.status(201).send(group);
  } catch (err) {
    return res.status(500).send("Bad Request");
  }
};
const addGroupMember = async (req, res) => {
  try {
    const groupId = req.params.groupId;
    const { member } = req.body;
    const group = await Group.findByPk(groupId);
    if (!group) {
      return res.status(404).send("Group not found");
    }
    await member.map(async (userId) => {
      await GroupUser.create({ GroupId: groupId, UserId: userId });
    });

    return res.status(200).send("Member added successfully");
  } catch (err) {
    return res.status(500).send("Bad Request");
  }
};
const addGroupMessage = async (req, res) => {
  try {
    const user = req.user;
    const groupId = +req.params.groupId;
    const group = await Group.findByPk(groupId);
    if (!group) {
      return res.status(404).send("No such group found");
    }
    const groupMessage = await GroupMessage.create(
      {
        ...req.body,
        GroupId: groupId,
        UserId: user.id,
      }
      
    );
    

    return res.status(200).send(groupMessage);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Bad Request");
  }
};

const getGroup = async (req, res) => {
  try {
    const user = req.user;

    const group = await Group.findAll({
      where: {
        AdminId: user.id,
      },
      include: {
        model: User,
        attributes: ["name"],
      },
    });
    if (group.length == 0) {
      return res.status(404).send("Group not found");
    }
    return res.status(200).send(group);
  } catch (err) {
    return res.status(500).send("Bad Request");
  }
};
const getGroupMember = async (req, res) => {
  try {
    const groupId = req.params.groupId;
    const groupMembers = await GroupUser.findAll({
      where: {
        GroupId: groupId,
      },
    });
    var userData = [];
    await Promise.all(
      groupMembers.map(async (item) => {
        const user = await User.findByPk(item.UserId, {
          attributes: ["name"],
        });
        userData.push(user);
      })
    );
    return res.status(200).send(userData);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Bad Request");
  }
};

const getGroupMessage = async (req, res) => {
  try {
    const user = req.user;
    const groupId = req.params.groupId;
    const mesage = await GroupMessage.findAll({
      where: {
        GroupId: groupId,
      }
    });
    let groupMessage=[]
    await Promise.all(mesage.map(async(item)=>{
       const user=await User.findByPk(item.UserId,{
          attributes:['name']
       });
       
       groupMessage.push(user)
    }))

    return res.status(200).send(groupMessage);
  } catch (err) {
    
    return res.status(500).send("Bad Request");
  }
};

module.exports = {
  addGroup,
  addGroupMember,
  addGroupMessage,
  getGroup,
  getGroupMember,
  getGroupMessage,
};
