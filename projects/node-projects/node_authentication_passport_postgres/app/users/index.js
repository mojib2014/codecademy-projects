module.exports = {
  login: (req, res) => {
    const { user } = req;

    res.send(user);
  },

  logout: (req, res, next) => {
    req.session.destroy((err) => {
      if (err) return next(err);

      req.logout();

      res.sendStatus(200);
    });
  },

  ping: (req, res) => {
    res.sendStatus(200);
  },
};
