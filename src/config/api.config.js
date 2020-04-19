'use strict';

const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  base: '/api/v1',
  secret: process.env.TOKEN_SECRET,
};
