const User = require('./user.model');

exports.get_users = (req, res) => {
  res.send('Get all users with conroller');
}

exports.get_user = (req, res) => {
  res.send('Get user with conroller');
}

exports.create_user = async (req, res, next) => {
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


exports.update_user = (req, res) => {
  res.send('update user with conroller');
}

exports.delete_user = (req, res) => {
  res.send('delete user with conroller');
}