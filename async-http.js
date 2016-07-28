var http = require('http');
var concatStream = require('concat-stream');

function resolveHTTP(a,b,c, callback) {
	var results = [];
	http.get(a, function(response) {
		response.setEncoding("utf8");
		response.pipe(concatStream(function (data) {
			data = data.toString(); 
			results.push(data);

			http.get(b, function(response) {
				response.setEncoding("utf8");
				response.pipe(concatStream(function (data) {
					data = data.toString(); 
					results.push(data);

						http.get(c, function(response) {
							response.setEncoding("utf8");
							response.pipe(concatStream(function (data) {
								data = data.toString(); 
								results.push(data);
								callback(results);
							}))
						})

				}))
			})

		}))
	})
	
}

resolveHTTP(process.argv[2], process.argv[3], process.argv[4], function(data) {
	data.map(function(ele) {
		console.log(ele);
	})
});