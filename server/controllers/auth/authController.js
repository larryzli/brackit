module.exports = {
  getUser: (req, res) => {
    if (req.user) {
      return res.status(200).json(req.user);
    } else {
      return res.status(403).send("Login Please");
    }
  },
  logout: (req, res) => {
    req.logout();
    return res.status(200).json();
  }
};
