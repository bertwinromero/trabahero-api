const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Get all users');
});

router.get('/:id', (req, res) => {
  res.send('Get single user');
});

router.post('/', (req, res) => {
  res.send('create user');
});

router.patch('/:id', (req, res) => {
  res.send('update user');
});

router.patch('/:id', (req, res) => {
  res.send('delete user');
});

module.exports = router;
