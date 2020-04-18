const Joi = require('@hapi/joi');

// SIGNIN VALIDATION
const signinValidation = (user) => {
  const schema = Joi.object({
    firstName: Joi.string().min(2).max(255).required(),
    lastName: Joi.string().min(2).max(255).required(),
    middleName: Joi.string().min(2).max(255).required(),
    photoUrl: Joi.string().min(2).max(1024).required(),
    phoneNumber: Joi.string().min(10).max(11).required(),
    gender: Joi.string().min(4).max(6).required(),
    address: Joi.string().min(2).max(255).required(),
    province: Joi.string().min(2).max(255).required(),
    city: Joi.string().min(2).max(255).required(),
    email: Joi.string().min(10).max(50).required(),
    password: Joi.string().min(6).max(1024).required(),
  })

  return schema.validate(user);
} 

module.exports.signinValidation = signinValidation;