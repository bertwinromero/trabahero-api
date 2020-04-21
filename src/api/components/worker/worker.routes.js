const router = require('express').Router();
const workerController = require('./worker.controller');
const validate = require('../../middlewares/validations/validate-worker');
const verifyToken =  require('../../middlewares/verify-token');

router.get('/', verifyToken, workerController.getWorkers);

router.get('/:id', verifyToken, workerController.getWorker);

router.post('/', verifyToken, validate.createWorker, workerController.createWorker);

router.patch('/:id', verifyToken, validate.updateWorker, workerController.updateWorker);

router.delete('/:id', verifyToken, workerController.deleteWorker);

module.exports = router;
