const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    min: 2
  },
  lastName: {
    type: String,
    required: true,
    min: 2
  },
  middleName: {
    type: String,
    required: true,
    min: 1
  },
  photoUrl: {
    type: String,
    required: true,
  },
  phoneNumner: {
    type: String,
    required: true,
    min: 10,
    max: 11
  },
  gender: { 
    type: String,
    required: true,
    min: 4,
    max: 6
  },
  address: {
    type: String,
    required: true,
    min: 2,
    max: 255,
  },
  province: { 
    type: String,
    required: true,
    min: 2,
    max: 255
  },
  city: {
    type: String,
    required: true,
    min: 2,
    max: 255
  },
  email: {
    type: String,
    required: true,
    min: 10,
    max: 50
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 1024,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', userSchema);