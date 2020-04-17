const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require("morgan");

const usersRoutes = require('./src/api/components/users/users.routes');

dotenv.config();

// CONNECT TO DB
mongoose.connect(process.env.DB_CONNECTION, { 
  useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('connected to db!'));

app.use(morgan("dev"));


// MIDDLEWARS
app.use(express.json());

// ROUTES MIDDLEWARE
app.use('/api/users', usersRoutes);

console.log(process.env.PORT)

module.exports = app;