const { verifyaToken } = require("..//util/token");
const User = require("../module/user");

module.exports = async (req, res, next) => {
  try {
    if (!req.headers.authorization)
      return res.status(401).send("please provide authorization token");
    const bearerToken = req.headers.authorization;
    if (!bearerToken.startsWith("Bearer "))
      return res.status(401).send("please provide bearer token");
    const token = bearerToken.split(" ")[1];
    let user;
    user = await verifyaToken(token);
    req.user = user.user;
    if (new Date(user.exp).getTime() < new Date(Date.now()).getTime()) {
      return res.status(401).send("Your token has expired login first");
    }
    next();
  } catch (err) {
    return res.status(500).send("bad request");
  }
};
