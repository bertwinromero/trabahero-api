const router = require('express').Router();
const workerController = require('./worker.controller');
const validate = require('../../middlewares/validations/validate-worker');

router.get('/', workerController.getWorkers);

router.get('/:id', workerController.getWorker);

router.post('/', validate.createWorker, workerController.createWorker);

router.patch('/:id', validate.updateWorker, workerController.updateWorker);

router.delete('/:id', workerController.deleteWorker);

module.exports = router;
