const User = require('./user.model');
const jwt = require('jsonwebtoken');

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.json({message: err});
  }
}

exports.getUser =  async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (err) {
    res.json({message: err});
  }
}

exports.createUser = async (req, res, next) => {
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    middleName: req.body.middleName,
    photoUrl: req.body.photoUrl,
    phoneNumber: req.body.phoneNumber,
    gender: req.body.gender,
    address: req.body.address,
    province: req.body.province,
    city: req.body.city,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const saveUser = await user.save();
    res.status(201).json({
      user: saveUser
    });
    return next();
  } catch (err) {
    res.status(400).send(err);
  }

  res.status(201).json({message: 'response here'});
}


exports.updateUser = async (req, res) => {
  try {
    const updateOps = {};
    for (const key of Object.keys(req.body)) {
      updateOps[key] = req.body[key];
    }
    const user = await User.update(
      { _id: req.params.id },
      { $set: updateOps }
    );
    res.json(user);
  } catch (err) {
    res.json({message: err});
  }
}

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.remove({_id: req.params.id});
    res.json(user);
  } catch (err) {
    res.json({message: err});
  }
}

exports.signUser = async (req, res) => {
  // CHECK IF THE EMAIL EXIST
  const user = await User.findOne({email: req.body.email});
  if (!user) {
    return res.status(400).send('Email or password is incorrect: EMAIL');
  }
  
  const validPass = user.password === req.body.password;
  if(!validPass) {
    return res.status(400).send('Email or password is incorrect: PASSOWRD');
  }

  // CREATE AND ASSING TOKEN
  const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
  res.header('auth-token', token).json({
    token,
    user
  });
} 