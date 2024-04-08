const app = require("..//index");
const db = require("..//config/db");
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const userSchema = require("..//module/user");
const messageSchema = require("..//module/message");
const { Group, GroupUser, GroupMessage } = require("..//module/group");
require("dotenv").config();

io.on("connection", (socket)=>{
  
  socket.on("send-message",(localData)=>{
    
  socket.emit("received-message",localData)
    
     
  })
  socket.on("group-send-message",(data)=>{
      socket.emit("group-received-message",data)
  })
  
})




const port = process.env.PORT || 8000;
userSchema.hasMany(messageSchema);
messageSchema.belongsTo(userSchema);
userSchema.hasMany(Group, {
  foreignKey: "AdminId",
});
Group.belongsTo(userSchema, {
  foreignKey: "AdminId",
});
// Group.belongsToMany(userSchema, { through: GroupUser });
// userSchema.belongsToMany(Group, { through: GroupUser });
GroupUser.belongsTo(userSchema)
GroupUser.belongsTo(Group)

GroupMessage.belongsTo(userSchema)
GroupMessage.belongsTo(Group)

db.sync()
  .then((res) => {
    console.log("database sync successful");

    server.listen(port, async () => {
      console.log(`listening on ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
    console.log("database sync failed");
  });
