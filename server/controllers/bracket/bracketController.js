// const axios = require("axios");

module.exports = {
  createBracket: (req, res) => {
    const {
      name,
      start,
      subject,
      description,
      headerImage,
      creatorID
    } = req.body;
    req.app
      .get("db")
      .create_bracket([
        name,
        start,
        subject,
        description,
        headerImage,
        creatorID
      ])
      .then(response => {
        return res.status(200).json(response[0]);
      })
      .catch(console.log);
  }
};
