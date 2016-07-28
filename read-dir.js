"use strict";
var fs = require('fs')

function filterFiles(file) {
	return file.split(".")[1] === process.argv[3];
}

function logFiles(file) {
		console.log(file);
}

function _dirList(err, files) {
		files
		.filter(filterFiles)
		.map(logFiles);
}

fs.readdir(process.argv[2], _dirList);
