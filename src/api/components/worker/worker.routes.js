const router = require('express').Router();

router.get('/', (req, res) => {
  console.log('get all workers');
});

router.get('/:id', (req, res) => {
  console.log('get single workers');
});

router.post('/', (req, res) => {
  console.log('create workers');
});

router.patch('/:id', (req, res) => {
  console.log('update workers');
});

router.delete('/', (req, res) => {
  console.log('delete workers');
});

module.exports = router;
