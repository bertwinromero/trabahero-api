const { createUserValidation, updateUserValidation } = require('../components/user/user.validation');

module.exports.createUserValidation = (req, res, next) => {
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


module.exports.updateUserValidation = (req, res, next) => {
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