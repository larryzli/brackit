const { getUser, updateUser } = require(`${__dirname}/userController`);

module.exports = function(app) {
  app.get("/api/me", getUser);
  app.put("/api/me/:id", updateUser);
};
