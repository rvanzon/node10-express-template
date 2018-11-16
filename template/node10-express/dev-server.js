const handler = require('import-cwd')('./handler');
const app = require('./app')(handler);
const server = require('./server')(app);

server.start();
