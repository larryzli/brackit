module.exports = {
  updateUser: (req, res) => {
    const { id } = req.params;
    const { alias, name, profile_image_url } = req.body;
    req.app
      .get("db")
      .update_user_by_authid([id, alias, name, profile_image_url])
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
