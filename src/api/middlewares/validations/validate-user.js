const { 
  createUserValidation,
  updateUserValidation,
  signinUserValidation 
} = require('../../components/user/user.validation');

module.exports.createUser = (req, res, next) => {
  try {
    const {error} = createUserValidation(req.body);
    if(error) {
      throw error;
    }
    next();
  } catch (error) {
    return res.status(400).send(error.details[0]);
  } 
}


module.exports.updateUser = (req, res, next) => {
  try {
    const {error} = updateUserValidation(req.body);
    if(error) {
      throw error;
    }
    next();
  } catch (error) {
    return res.status(400).send(error);
  } 
}

module.exports.signinUser = (req, res, next) => {
  try {
    const {error} = signinUserValidation(req.body);
    if(error) {
      throw error;
    }
    next();
  } catch (error) {
    return res.status(400).send(error);
  } 
}