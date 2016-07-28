var http = require("http");
var fs = require('fs');
var path = require('path');
var server = http.createServer(function(req, response) {
	response.writeHead(200, { 'content-type': 'text/plain' })
	fs.createReadStream(process.argv[3]).pipe(response);
});
server.listen(Number(process.argv[2]));
