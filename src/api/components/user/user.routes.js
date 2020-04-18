const router = require('express').Router();
const userController = require('./user.controller');
const validate = require('../../middlewares/validation');

router.get('/', userController.getUsers);

router.get('/:id', userController.getUser);

router.post('/', validate.signinValidation, userController.createUser);

router.patch('/:id', userController.updateUser);

router.delete('/:id', userController.deleteUser);

module.exports = router;
