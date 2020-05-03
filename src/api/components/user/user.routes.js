const router = require('express').Router();
const userController = require('./user.controller');
const validate = require('../../middlewares/validations/validate-user');
const verifyToken =  require('../../middlewares/verify-token');
const upload = require('../../../config/upload.config').upload;


router.get('/', verifyToken, userController.getUsers);

router.get('/:id', verifyToken, userController.getUser);

router.post('/signup', upload.single('photoUrl'), validate.createUser, userController.createUser);

router.post('/signin', validate.signinUser, userController.signUser);

router.patch('/:id', verifyToken, validate.updateUser, userController.updateUser);

router.delete('/:id', verifyToken, userController.deleteUser);

module.exports = router;
