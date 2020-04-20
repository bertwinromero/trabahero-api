const router = require('express').Router();

router.get('/', (res, req) => {
  console.log('get all skills');
});

router.get('/:id', (res, req) => {
  console.log('get single skill');
});

router.post('/', (res, req) => {
  console.log('create skill');
});

router.patch('/:id', (res, req) => {
  console.log('update skill');
});

router.delete('/:id', (res, req) => {
  console.log('delete skill');
});

module.exports = router;
