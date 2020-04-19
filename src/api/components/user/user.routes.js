const router = require('express').Router();
const userController = require('./user.controller');
const validate = require('../../middlewares/validation');

router.get('/', userController.getUsers);

router.get('/:id', userController.getUser);

router.post('/signup', validate.createUserValidation, userController.createUser);

router.post('/signin', validate.signinUserValidation, userController.signUser);

router.patch('/:id', validate.updateUserValidation, userController.updateUser);

router.delete('/:id', userController.deleteUser);

module.exports = router;
