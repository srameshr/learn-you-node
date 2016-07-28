var http = require('http');
var server = http.createServer(function(req, res) {

});
server.listen(Number(process.argv[2]));
var req = http.request({
	method: 'POST',
}, function(req) {
	console.log(req)
});
