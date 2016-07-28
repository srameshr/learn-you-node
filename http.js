var http = require("http");

function processData(response) {
	response.setEncoding("utf8");
	response.on('data', function(data) {
		console.log(data);
	});
	response.on('error', function(err) {
		throw new Error(err);
	});
}
http.get(process.argv[2], processData);