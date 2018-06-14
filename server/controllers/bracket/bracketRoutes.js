const {
  createBracket,
  getCreatorBrackets,
  getProtectedBracket,
  updateBracket
} = require(`${__dirname}/bracketController`);

module.exports = function(app) {
  app.post("/api/bracket/create", createBracket);
  app.get("/api/bracket/creator/", getCreatorBrackets);
  app.get("/api/bracket/manage/:id", getProtectedBracket);
  app.put("/api/bracket/manage/:id", updateBracket);
};
