const router = require('express').Router();
const skillController = require('./skill.controller');
const validate = require('../../middlewares/validations/validate-skill');
const verifyToken =  require('../../middlewares/verify-token');

router.get('/', verifyToken, skillController.getSkills);

router.get('/:id', verifyToken, skillController.getSkill);

router.post('/', verifyToken, validate.skill, skillController.createSkill);

router.patch('/:id', verifyToken, validate.skill, skillController.updateSkill);

router.delete('/:id', verifyToken, skillController.deleteSkill);

module.exports = router;
