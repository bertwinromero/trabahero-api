const jwt = require('jsonwebtoken');
const response = require('../../utils/response/response').response;
const { authMessages } = require('../../utils/response/response-messages');

module.exports = function (req, res, next) {
  const token = req.headers.authorization ? req.headers.authorization.split(" ")[1] : null;
  if(!token) {
    const error = {
       message: authMessages.accessDenied,
    };
    return response.badRequest(error, req, res);
  }

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    const error = {
      message: authMessages.invalidToken,
   };
   return response.badRequest(error, req, res);
  }
}