const { 
  createUserValidation,
  updateUserValidation,
  signinUserValidation 
} = require('../../components/user/user.validation');
const response = require('../../../utils/response/response').response;

module.exports.createUser = (req, res, next) => {
  try {
    const {error} = createUserValidation(req.body);
    if(error) {
      throw error;
    }
    next();
  } catch (err) {
    return response.badRequest(err.details[0], req, res);
  } 
}


module.exports.updateUser = (req, res, next) => {
  try {
    const {error} = updateUserValidation(req.body);
    if(error) {
      throw error;
    }
    next();
  } catch (err) {
    return response.badRequest(err.details[0], req, res);
  } 
}

module.exports.signinUser = (req, res, next) => {
  try {
    const {error} = signinUserValidation(req.body);
    if(error) {
      throw error;
    }
    next();
  } catch (err) {
    return response.badRequest(err.details[0], req, res);
  } 
}