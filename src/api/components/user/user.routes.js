const router = require('express').Router();
const userController = require('./user.controller');
const validate = require('../../middlewares/validation');

router.get('/', userController.getUsers);

router.get('/:id', userController.getUser);

router.post('/', validate.createUserValidation, userController.createUser);

router.patch('/:id', validate.updateUserValidation, userController.updateUser);

router.delete('/:id', userController.deleteUser);

module.exports = router;
