const mongoose = require('mongoose');

const workerSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  skills: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Skill',
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Worker', workerSchema);