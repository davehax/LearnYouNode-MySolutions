var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var ext = '.' + process.argv[3];

fs.readdir(dir, function(err, list) {
	if (err) {
		console.error(err);
		return;
	}

	list.forEach(function(item) {
		// make sure it ENDS with <ext>
		if (path.extname(item) == ext) {
			console.log(item);
		}
	});
});
