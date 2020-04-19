'use strict';

const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  host: '127.0.0.1',
  port: 27017,
  db: 'trabahero-api',
  username: process.env.DB_USERNAME || 'username', 
  password: process.env.DB_PASSWORD || 'password',

  getDatabaseURI(authentication) {
    var uriObject = 'mongodb://';

    if (authentication) {
      uriObject += this.username + ':' + this.password + '@';
    }

    uriObject += this.host + ':' + this.port;
    uriObject += '/' + this.db;
    return uriObject;
  },
} 