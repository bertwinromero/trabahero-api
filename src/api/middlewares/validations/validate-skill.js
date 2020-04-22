const { validate } = require('../../components/skill/skill.validation');
const response = require('../../../utils/response/response').response;

module.exports.skill = (req, res, next) => {
  try {
    const {error} = validate(req.body);
    if(error) {
      throw error;
    }
    next();
  } catch (err) {
    return response.badRequest(err.details[0], req, res);
  }
}