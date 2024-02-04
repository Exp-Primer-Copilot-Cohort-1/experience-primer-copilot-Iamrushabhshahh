// Create web server
var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');

// Create server
http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  var extname = path.extname(filename);
  var contentType = 'text/html';
  if (extname === '.css') {
    contentType = 'text/css';
  }
  if (extname === '.js') {
    contentType = 'text/javascript';
  }
  if (extname === '.png') {
    contentType = 'image/png';
  }
  if (extname === '.jpg') {
    contentType = 'image/jpg';
  }
  if (extname === '.ico') {
    contentType = 'image/x-icon';
  }
  if (extname === '.json') {
    contentType = 'application/json';
  }
  if (extname === '.woff') {
    contentType = 'application/font-woff';
  }
  if (extname === '.woff2') {
    contentType = 'application/font-woff2';
  }
  if (extname === '.ttf') {
    contentType = 'application/font-ttf';
  }
  if (extname === '.eot') {
    contentType = 'application/vnd.ms-fontobject';
  }
  if (extname === '.otf') {
    contentType = 'application/font-otf';
  }
  if (extname === '.svg') {
    contentType = 'image/svg+xml';
  }
  if (extname === '.pdf') {
    contentType = 'application/pdf';
  }
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }
    res.writeHead(200, {'Content-Type': contentType});
    res.write(data);
    return res.end();
  });
}).listen(8080);
console.log('Server running at http://