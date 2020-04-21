const Joi = require('@hapi/joi');

const workerSchema = Joi.object({
  user: Joi.string().min(2).max(255),
  skills: Joi.array().items(Joi.string().min(2).max(255).required())
});

// CREATE VALIDATION
const createWorkerValidation = (worker) => {
  const createWorkerSchema = workerSchema.options({presence: 'required'});
  return createWorkerSchema.validate(worker);
}

// UPDATE VALIDATION
const updateWorkerValidation = (worker) => {
  return workerSchema.validate(worker);
}

module.exports.createWorkerValidation = createWorkerValidation;
module.exports.updateWorkerValidation = updateWorkerValidation;