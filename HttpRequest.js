var http = require('http');
var url = process.argv[2];

var req = http.request(url, function(res) {
	var strBuffer = '';
	res.setEncoding('utf8');
	res.on('data', function(chunk) {
		strBuffer += chunk;
	});

	res.on('end', function() {
		console.log(strBuffer.length);
		console.log(strBuffer);
	});
});

req.end();
