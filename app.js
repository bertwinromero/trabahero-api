const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require("morgan");
const bodyParser = require("body-parser");
const databaseConfig = require('./src/config/database.config');

const usersRoutes = require('./src/api/components/user/user.routes');

dotenv.config();

// CONNECT TO DB
mongoose.connect(databaseConfig.getDatabaseURI(), { 
  useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('connected to db!'));

app.use(morgan("dev"));


// MIDDLEWARS
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// ROUTES MIDDLEWARE
app.use('/api/users', usersRoutes);

module.exports = app;