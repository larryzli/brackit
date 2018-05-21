module.exports = {
  logout: (req, res) => {
    req.logout();
    return res.status(200).json();
  }
};
