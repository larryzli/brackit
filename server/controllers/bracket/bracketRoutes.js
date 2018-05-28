const { createBracket } = require(`${__dirname}/bracketController`);

module.exports = function(app) {
  app.post("/api/bracket/create", createBracket);
};
