const Worker = require('./worker.model');
const response = require('../../../utils/response').response;

exports.getWorkers = async (req, res) => {
  try {
    const workers = await Worker.find();
    return response.ok(workers, req, res);
  } catch (err) {
    return response.badRequest(err, req, res);
  }
}

exports.getWorker = async (req, res) => {
  try {
    const worker = await Worker.findById(req.params.id);
    return response.ok(worker, req, res);
  } catch (err) {
    return response.badRequest(err, req, res);
  }
}

exports.createWorker = async (req, res, next) => {

 const worker = new Worker({
   user: req.body.user,
   skills: req.body.skills
 });

  try {
    const saveWorker = await worker.save();
    response.ok(201, saveWorker, req, res);
    return next();
  } catch (err) {
    return response.badRequest(err, req, res);
  }
}

exports.updateWorker = async (req, res) => {
  try {
    const updateOps = {};
    for (const key of Object.keys(req.body)) {
      updateOps[key] = req.body[key];
    }
    const worker = await Worker.update(
      { _id: req.params.id },
      { $set: updateOps }
    );
    return response.ok(worker, req, res);
  } catch (err) {
    return response.badRequest(err, req, res);
  }
}

exports.deleteWorker = async (req, res) => {
  try {
    const worker = await Worker.remove({_id: req.params.id});
    return response.ok(worker, req, res);
  } catch (err) {
    return response.badRequest(err, req, res);
  }
}
