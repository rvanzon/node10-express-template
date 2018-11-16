const handler = require('./function/handler');
const app = require('./app')(handler);
const server = require('./server')(app);

server.start();