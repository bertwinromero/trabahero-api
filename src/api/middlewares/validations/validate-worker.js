const { createWorkerValidation, updateWorkerValidation } = require('../../components/worker/worker.validation');
const response = require('../../../utils/response').response;

module.exports.createWorker = (req, res, next) => {
  try {
    const {error} = createWorkerValidation(req.body);
    if(error) {
      throw error;
    }
    next();
  } catch (err) {
    return response.badRequest(err.details[0], req, res);
  } 
}

module.exports.updateWorker = (req, res, next) => {
  try {
    const {error} = updateWorkerValidation(req.body);
    if(error) {
      throw error;
    }
    next();
  } catch (err) {
    return response.badRequest(err.details[0], req, res);
  } 
}
