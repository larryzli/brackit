const { getUser, logout } = require(`${__dirname}/authController`);

module.exports = function(app) {
  app.get("/api/me", getUser);
  app.delete("/api/logout", logout);
};
