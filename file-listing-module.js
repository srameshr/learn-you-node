var fs = require('fs');
var path = require('path') 
module.exports = function(dir, fileExt, callback) {
	fs.readdir(dir, function(err, data) {
		if(err) {
			return callback(err);
		}

		function _filterFiles(ele, i, arr) {
			return path.extname(ele) === '.' + fileExt;
		}

		function _dirList(data) {
			return data
 				.filter(_filterFiles)

		}

		return callback(null, _dirList(data))

	});
}