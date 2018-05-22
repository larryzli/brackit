module.exports = {
  getUser: (req, res) => {
    if (req.user) {
      req.app
        .get("db")
        .get_user_by_userid([req.user.user_id])
        .then(response => {
          return res.status(200).json(response[0]);
        })
        .catch(console.log);
    } else {
      return res.status(403).send("Login Please");
    }
  },
  findUser: (req, res) => {
    req.app
      .get("db")
      .get_user_by_userid([req.params.id])
      .then(response => {
        return res.status(200).json(response[0]);
      })
      .catch(console.log);
  },
  updateUser: (req, res) => {
    const { id } = req.params;
    const { alias, name, profile_image_url, bio } = req.body;
    req.app
      .get("db")
      .update_user_by_authid([id, alias, name, profile_image_url, bio])
      .then(response => {
        if (response[0]) {
          res.status(200).json(response[0]);
        } else {
          res.status(500).json();
        }
      })
      .catch(console.log);
  }
};
