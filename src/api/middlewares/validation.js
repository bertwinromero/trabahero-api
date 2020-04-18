const { signinValidation } = require('../components/user/user.validation');

module.exports.signinValidation = (req, res, next) => {
  try {
    const {error} = signinValidation(req.body);
    if(error) {
      throw error;
    }
    next();
  } catch (error) {
    return res.status(400).send(error.details[0]);
  } 
}