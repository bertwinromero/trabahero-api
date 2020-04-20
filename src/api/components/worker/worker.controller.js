const Worker = require('./worker.model');

exports.getWorkers = async (req, res) => {
  try {
    const workers = await Worker.find();
    res.json(workers);
  } catch (err) {
    res.json({message: err});
  }
}

exports.getWorker = async (req, res) => {
  try {
    const worker = await Worker.findById(req.params.id);
    res.json(worker);
  } catch (err) {
    res.json({message: err});
  }
}

exports.createWorker = async (req, res, next) => {

 const worker = new Worker({
   user: req.body.user,
   skills: req.body.skills
 });

 try {
   const saveWorker = await worker.save();
   res.status(201).json({
     user: saveWorker
   });
   return next();
 } catch (err) {
   res.status(400).send(err);
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
    res.json(worker);
  } catch (err) {
    res.json({message: err});
  }
}

exports.deleteWorker = async (req, res) => {
  try {
    const worker = await Worker.remove({_id: req.params.id});
    res.json(worker);
  } catch (err) {
    res.json({message: err});
  }
}
