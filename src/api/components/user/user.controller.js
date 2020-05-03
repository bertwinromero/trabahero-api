const User = require('./user.model');
const jwt = require('jsonwebtoken');
const brcrypt = require('bcryptjs');
const response = require('../../../utils/response/response').response;
const { authMessages } = require('../../../utils/response/response-messages')
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    return response.ok(users, req, res);
  } catch (err) {
    return response.badRequest(err, req, res);
  }
}

exports.getUser =  async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    return response.ok(user, req, res);
  } catch (err) {
    return response.badRequest(err, req, res);
  }
}

exports.createUser = async (req, res, next) => {
  console.log('path: ', req.file.path);
   // CHECK IF USER IS IN DATABASE
   const emailExist = await User.findOne({email: req.body.email});
   if(emailExist){
     const error = {
       message: authMessages.emailExist,
     };
    return response.exists(error, req, res);

   }

   // HASH PASSOWRDS
  const salt = await brcrypt.genSalt(10);
  const hassPassword = await brcrypt.hash(req.body.password, salt);

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
    password: hassPassword,
  });

  try {
    const savedUser = await user.save();
    response.ok(201, savedUser, req, res);
    return next();
  } catch (err) {
    return response.badRequest(err, req, res);
  }
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
    return response.ok(user, req, res);
  } catch (err) {
    return response.badRequest(err, req, res);
  }
}

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.remove({_id: req.params.id});
    return response.ok(user, req, res);
  } catch (err) {
    return response.badRequest(err, req, res);
  }
}

exports.signUser = async (req, res) => {
  // CHECK IF THE EMAIL EXIST
  const user = await User.findOne({email: req.body.email});
  if (!user) {
    const error = { message: authMessages.incorrectCredentials };
    return response.badRequest(error, req, res);
  }
  
  // // CHECK IF PASSOWRD IS MATCHED
  const validPass = await brcrypt.compare(req.body.password, user.password);
  if(!validPass) {
    const error = { message: authMessages.incorrectCredentials };
    return response.badRequest(error, req, res);
  }

  // CREATE AND ASSING TOKEN
  const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
  return response.ok({ token, user }, req, res);
} 