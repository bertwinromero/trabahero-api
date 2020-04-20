const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require("morgan");
const bodyParser = require("body-parser");

// CONFIG
const databaseConfig = require('./src/config/database.config');
const apiConfig = require('./src/config/api.config');

// ROUTES
const usersRoutes = require('./src/api/components/user/user.routes');
const skillsRoutes = require('./src/api/components/skill/skill.routes');
const workersRoutes = require('./src/api/components/worker/worker.routes');

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
app.use(`${apiConfig.base}/users`, usersRoutes);
app.use(`${apiConfig.base}/skills`, skillsRoutes);
app.use(`${apiConfig.base}/workers`, workersRoutes);

module.exports = app;