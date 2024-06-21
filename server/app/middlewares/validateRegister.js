const emailRegex = /[a-z0-9._]+@[a-z0-9-]+\.[a-z]{2,3}/;

const validateRegister = (req, res, next) => {
  const errors = [];

  if (req.body.username.length < 5) {
    res.sendStatus(401);
  } else if (!emailRegex.test(req.body.email)) {
    errors.push({ field: "email", message: "Invalid email" });
  } else if (req.body.password < 5) {
    errors.push({ field: "password", message: "Invalid password" });
  } else if (!Number.isInteger(Number(req.body.zipcode))) {
    errors.push({ field: "zipcode", message: "Invalid zipcode" });
  } else {
    next();
  }
};

module.exports = validateRegister;
