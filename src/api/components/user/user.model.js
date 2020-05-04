const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    min: 2,
    max: 40
  },
  lastName: {
    type: String,
    required: true,
    min: 2,
    max: 40
  },
  middleName: {
    type: String,
    required: true,
    min: 1,
    max: 40
  },
  photoUrl: {
    type: String,
    required: true,
    max: 1024
  },
  phoneNumber: {
    type: String,
    required: true,
    min: 10,
    max: 15
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