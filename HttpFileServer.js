var fs = require('fs');
var http = require('http');

var port = process.argv[2];
var fileLocation = process.argv[3];

var server = http.createServer(function(request, response) {
	// need to stream the contents of a file to the response
	var stream = fs.createReadStream(fileLocation).pipe(response);
});

// start the server on this port
server.listen(port);
