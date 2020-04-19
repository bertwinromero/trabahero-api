const Joi = require('@hapi/joi');

const userSchema = Joi.object({
  firstName: Joi.string().min(2).max(255),
  lastName: Joi.string().min(2).max(255),
  middleName: Joi.string().min(2).max(255),
  photoUrl: Joi.string().min(2).max(1024),
  phoneNumber: Joi.string().min(10).max(11),
  gender: Joi.string().min(4).max(6),
  address: Joi.string().min(2).max(255),
  province: Joi.string().min(2).max(255),
  city: Joi.string().min(2).max(255),
  email: Joi.string().min(10).max(50),
  password: Joi.string().min(6).max(1024),
}).min(1);

// CREATE VALIDATION
const createUserValidation = (user) => {
  const createUserSchema = userSchema.options({presence: 'required'});
  return createUserSchema.validate(user);
} 

// UPDATE VALIDATION
const updateUserValidation = (user) => {
  return userSchema.validate(user);
  } 


module.exports.createUserValidation = createUserValidation;
module.exports.updateUserValidation = updateUserValidation;