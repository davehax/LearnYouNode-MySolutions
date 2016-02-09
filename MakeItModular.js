var fs = require('fs');
var path = require('path');

function printFilteredFileList(dir, ext, callback) {
	// add the dot n_n
	ext = '.' + ext;

	fs.readdir(dir, function(err, list) {
		if (err) {
			return callback(err);
		}

		var fileList = list.filter(function(item) {
			// make sure it ENDS with <ext>
			return path.extname(item) == ext;
		});

		callback(null, fileList);
	});

}

module.exports = printFilteredFileList;
