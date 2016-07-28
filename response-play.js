var http = require('http');
var concatStream = require('concat-stream');

function processData(response) {
	response.setEncoding("utf8");
	response.pipe(concatStream(function (data) {
			data = data.toString(); 
			console.log(data.length)
			console.log(data) 
		})
	); 
}

http.get(process.argv[2], processData);