const Skill = require('./skill.model');

exports.getSkills = async (req, res) => {
  try {
    const skill = await Skill.find();
    res.json(skill);
  } catch (err) {
    res.json({message: err});
  }
}

exports.getSkill= async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id);
    res.json(skill);
  } catch (err) {
    res.json({message: err});
  }
}

exports.createSkill= async (req, res, next) => {
  const skill = new Skill({
    name: req.body.name
  })
  try {
    const saveSkill = await skill.save();
    res.status(201).json({
      user: saveSkill
    });
    return next();
  } catch (err) {
    res.status(400).send(err);
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
    res.json(skill);
  } catch (err) {
    res.json({message: err});
  }
}

exports.deleteSkill = async (req, res) => {
  try {
    const skill = await Skill.remove({_id: req.params.id});
    res.json(skill);
  } catch (err) {
    res.json({message: err});
  }
}




