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
    if (req.user) {
      const { user_id } = req.user;
      req.app
        .get("db")
        .get_brackets_by_creator([user_id])
        .then(response => {
          res.status(200).json(response);
        })
        .catch(console.log);
    } else {
      res.status(401).send("Please login or sign up.");
    }
  },
  getProtectedBracket: (req, res) => {
    if (req.user) {
      const { id: bracket_id } = req.params;
      const { user_id } = req.user;
      if (bracket_id) {
        req.app
          .get("db")
          .get_bracket_by_id([bracket_id])
          .then(response => {
            if (response.length) {
              console.log(response[0], +user_id);
              if (response[0].creator_id === +user_id) {
                return res.status(200).json(response[0]);
              } else {
                return res
                  .status(403)
                  .send(`User is not authorized to manage bracket.`);
              }
            } else {
              return res.status(409).send(`No bracket with id: ${bracket_id}.`);
            }
          });
      } else {
        return res.status(409).send(`Invalid bracket id: ${bracket_id}.`);
      }
    } else {
      return res.status(401).send("Please log in or sign up.");
    }
  },
  updateBracket: (req, res) => {
    const { id: bracket_id } = req.params;
    const { name, start, subject, description, headerImage } = req.body;

    req.app
      .get("db")
      .update_bracket_by_bracket_id([
        bracket_id,
        name,
        start,
        subject,
        description,
        headerImage
      ])
      .then(response => {
        return res.status(200).json(response[0]);
      })
      .catch(console.log);
  }
};
