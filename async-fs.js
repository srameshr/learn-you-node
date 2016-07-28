var fs = require('fs');

function readFileContents(err, data) {
	// Async here
	console.log(data.toString().split("\n").length - 1); // It has
	// It has no new line at the end. So the -1 // Refactor
}

fs.readFile(process.argv[2], readFileContents);
