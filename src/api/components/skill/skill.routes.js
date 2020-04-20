const router = require('express').Router();
const skillController = require('./skill.controller');

router.get('/', skillController.getSkills);

router.get('/:id', skillController.getSkill);

router.post('/', skillController.createSkill);

router.patch('/:id', skillController.updateSkill);

router.delete('/:id', skillController.deleteSkill);

module.exports = router;
