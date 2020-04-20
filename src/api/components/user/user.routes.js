const router = require('express').Router();
const userController = require('./user.controller');
const validate = require('../../middlewares/validation');
const verifyToken =  require('../../middlewares/verify-token');

router.get('/', verifyToken, userController.getUsers);

router.get('/:id', verifyToken, userController.getUser);

router.post('/signup', validate.createUserValidation, userController.createUser);

router.post('/signin', validate.signinUserValidation, userController.signUser);

router.patch('/:id', verifyToken, validate.updateUserValidation, userController.updateUser);

router.delete('/:id', verifyToken, userController.deleteUser);

module.exports = router;
