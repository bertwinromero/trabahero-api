const router = require('express').Router();
const workerController = require('./worker.controller');

router.get('/', workerController.getWorkers);

router.get('/:id', workerController.getWorker);

router.post('/', workerController.createWorker);

router.patch('/:id', workerController.updateWorker);

router.delete('/:id', workerController.deleteWorker);

module.exports = router;
