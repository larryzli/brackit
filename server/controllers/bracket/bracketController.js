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
  },
  getCreatorBrackets: (req, res) => {
    const { user_id } = req.user;
    if (user_id) {
      req.app
        .get("db")
        .get_brackets_by_creator([user_id])
        .then(response => {
          res.status(200).json(response);
        })
        .catch(console.log);
    } else {
      res.status(403).json();
    }
  }
};
