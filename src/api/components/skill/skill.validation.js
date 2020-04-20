const Joi = require('@hapi/joi');

const validate = (skill) => {
  const skillSchema = Joi.object({
    name: Joi.string().min(2).max(50).required()
  });

  return skillSchema.validate(skill);
}

module.exports.validate = validate;