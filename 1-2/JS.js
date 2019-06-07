var http = require('http');
var static = require('node-static');
var file = new static.Server('.');

http.createServer(function(req, res) {
  var date = new Date();
  //res.end(JSON.stringify(date.toString()));
  fs = require('fs');   //fs - work with files
  let FileContent = fs.readFileSync('TXT.txt', 'utf-8');
  res.end(JSON.stringify(FileContent) + "  " + JSON.stringify(date.toString()));
}).listen(8080);

console.log('Server running on port 8080');
