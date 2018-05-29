const {
  createBracket,
  getCreatorBrackets
} = require(`${__dirname}/bracketController`);

module.exports = function(app) {
  app.post("/api/bracket/create", createBracket);
  app.get("/api/bracket/creator/", getCreatorBrackets);
};
