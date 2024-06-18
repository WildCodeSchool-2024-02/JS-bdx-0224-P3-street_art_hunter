const validateRegister = (req, res, next) => {
  if (req.body.username.length < 5) {
    res.sendStatus(401);
  } else {
    next();
  }
};

module.exports = validateRegister;
