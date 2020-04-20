const router = require('express').Router();
const skillController = require('./skill.controller');
const validate = require('../../middlewares/validations/validate-skill');

router.get('/', skillController.getSkills);

router.get('/:id', skillController.getSkill);

router.post('/', validate.skill, skillController.createSkill);

router.patch('/:id', validate.skill, skillController.updateSkill);

router.delete('/:id', skillController.deleteSkill);

module.exports = router;
