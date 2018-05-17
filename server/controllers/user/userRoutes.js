const { updateUser } = require(`${__dirname}/userController`);

module.exports = function(app) {
  app.put("/api/me/:id", updateUser);
};
