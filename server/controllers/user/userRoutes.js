const {
  getUser,
  updateUser,
  findUser
} = require(`${__dirname}/userController`);

module.exports = function(app) {
  app.get("/api/me", getUser);
  app.get("/api/user/:id", findUser);
  app.put("/api/me/:id", updateUser);
};
