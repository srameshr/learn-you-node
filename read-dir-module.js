var fileLister = require('./file-listing-module');
fileLister(process.argv[2], process.argv[3], function(err, data) {

	function _printFiles(ele, i, arr) {
		console.log(ele.toString());
	}

	if(err) {
		throw new Error("Failed: " + err);
	}
	else {
		return data.map(_printFiles);
	}
});