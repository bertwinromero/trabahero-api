const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  const token = req.headers.authorization ? req.headers.authorization.split(" ")[1] : null;
  if(!token) {
    return res.status(401).send({
      error: {message: 'Access denied'}
    });
  }

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send({
      error: {message: 'Invalid token'}
    });
  }
}