const userRoutes = require(`${__dirname}/controllers/user/userRoutes`);
const matchRoutes = require(`${__dirname}/controllers/match/matchRoutes`);
const bracketRoutes = require(`${__dirname}/controllers/bracket/bracketRoutes`);
const authRoutes = require(`${__dirname}/controllers/auth/authRoutes`);

module.exports = function(app) {
  authRoutes(app);
  userRoutes(app);
  matchRoutes(app);
  bracketRoutes(app);
};
