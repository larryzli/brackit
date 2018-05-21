const { logout } = require(`${__dirname}/authController`);

module.exports = function(app) {
  app.delete("/api/logout", logout);
};
