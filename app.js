const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

// CONNECT TO DB
mongoose.connect(process.env.DB_CONNECTION, { 
  useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('connected to db!'));

// MIDDLEWARS
app.use(express.json());

module.exports = app;