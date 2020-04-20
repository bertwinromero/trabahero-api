const { validate } = require('../../components/skill/skill.validation');

module.exports.skill = (req, res, next) => {
  try {
    const {error} = validate(req.body);
    if(error) {
      throw error;
    }
    next();
  } catch (error) {
    return res.status(400).send(error.details[0]);
  }
}