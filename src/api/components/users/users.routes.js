const router = require('express').Router();
const UserController = require('./users.controller');

router.get('/', UserController.get_users);

router.get('/:id', UserController.get_user);

router.post('/signup', UserController.create_user);

router.patch('/:id', UserController.update_user);

router.delete('/:id', UserController.delete_user);

module.exports = router;
