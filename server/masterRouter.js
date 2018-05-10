const userRoutes = require(`${__dirname}/controllers/user/userRoutes`);
const matchRoutes = require(`${__dirname}/controllers/match/matchRoutes`);
const bracketRoutes = require(`${__dirname}/controllers/bracket/bracketRoutes`);

module.exports = function(app) {
  userRoutes(app);
  matchRoutes(app);
  bracketRoutes(app);
};
