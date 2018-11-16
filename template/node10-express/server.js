var http = require('http');

module.exports = (app) => {
  const port = process.env.http_port || 3000;

  app.set('port', port);

  var server = http.createServer(app);

  return {
    start () {
      server.listen(port, () => {
        console.log(`OpenFaaS Node.js listening on port: ${port}`)
      });
    }
  }
}