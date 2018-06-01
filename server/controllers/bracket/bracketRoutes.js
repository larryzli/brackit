const {
  createBracket,
  getCreatorBrackets,
  getBracket
} = require(`${__dirname}/bracketController`);

module.exports = function(app) {
  app.post("/api/bracket/create", createBracket);
  app.get("/api/bracket/creator/", getCreatorBrackets);
  app.get("/api/bracket/:id", getBracket);
};
