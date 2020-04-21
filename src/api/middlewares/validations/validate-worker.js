const { createWorkerValidation, updateWorkerValidation } = require('../../components/worker/worker.validation');

module.exports.createWorker = (req, res, next) => {
  try {
    const {error} = createWorkerValidation(req.body);
    if(error) {
      throw error;
    }
    next();
  } catch (error) {
    return res.status(400).send(error.details[0]);
  } 
}

module.exports.updateWorker = (req, res, next) => {
  try {
    const {error} = updateWorkerValidation(req.body);
    if(error) {
      throw error;
    }
    next();
  } catch (error) {
    return res.status(400).send(error);
  } 
}
