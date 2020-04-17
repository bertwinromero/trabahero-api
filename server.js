const http = require('http');
const app = require('./app');
const serverConfig = require('./src/config/server.config');

const port = serverConfig.port;

const server = http.createServer(app);

server.listen(port);