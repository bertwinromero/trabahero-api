const Skill = require('./skill.model');
const response = require('../../../utils/response/response').response;

exports.getSkills = async (req, res) => {
  try {
    const skill = await Skill.find();
    return response.ok(skill, req, res);
  } catch (err) {
    return response.badRequest(err, req, res);
  }
}

exports.getSkill= async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id);
    return response.ok(skill, req, res);
  } catch (err) {
    return response.badRequest(err, req, res);
  }
}

exports.createSkill= async (req, res, next) => {
  const skill = new Skill({
    name: req.body.name
  })
  try {
    const saveSkill = await skill.save();
    response.ok(201, saveSkill, req, res);
    return next();
  } catch (err) {
    return response.badRequest(err, req, res);
  }
}

exports.updateSkill= async (req, res) => {
  try {
    const updateOps = {};
    for (const key of Object.keys(req.body)) {
      updateOps[key] = req.body[key];
    }
    const skill = await Skill.update(
      { _id: req.params.id },
      { $set: updateOps }
    );
    return response.ok(skill, req, res);
  } catch (err) {
    return response.badRequest(err, req, res);
  }
}

exports.deleteSkill = async (req, res) => {
  try {
    const skill = await Skill.remove({_id: req.params.id});
    return response.ok(skill, req, res);
  } catch (err) {
    return response.badRequest(err, req, res);
  }
}




