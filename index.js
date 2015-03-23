// based on https://gist.github.com/mikeal/1840641
var net = require('net');

module.exports = function getPort (cb, options) {
  options = options || {};
  options.start = options.start || 45032;
  options.end = options.end || options.start + 1000;

  var port = options.start;

  if (port > 65535 || port > options.end) {
    cb(new Error('port out of range: ' + port));
  }

  var server = net.createServer();
  server.listen(port, function (err) {
    server.once('close', function () {
      cb(null, port);
    });
    server.close();
  });
  server.on('error', function (err) {
    options.start++;
    getPort(cb, options);
  });
};
