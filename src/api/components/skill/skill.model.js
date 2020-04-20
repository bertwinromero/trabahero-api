const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: { 
    type: String,
    required: true,
    min: 2,
    max: 50,
  },
})

module.exports = mongoose.model('Skill', skillSchema);