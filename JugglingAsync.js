var http = require('http');

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

function getFullContents(url, callback) {
	var req = http.request(url, function(res) {
		var strBuffer = '';
		res.setEncoding('utf8');
		res.on('data', function(chunk) {
			strBuffer += chunk;
		});

		res.on('end', function() {
			return callback(null, strBuffer);
		});

		res.on('error', function(err) {
			return callback(err);
		});
	});

	req.end();
}

getFullContents(url1, function(err, data) {
	console.log(data);
	getFullContents(url2, function(err, data) {
		console.log(data);
		getFullContents(url3, function(err, data) {
			console.log(data);
		});
	});
});
