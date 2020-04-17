'use strict';

module.exports = {
  host: '127.0.0.1',
  port: 27017,
  db: 'trabahero-api',
  username: 'username', 
  password: 'password',

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