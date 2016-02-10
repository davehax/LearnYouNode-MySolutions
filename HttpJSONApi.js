var http = require('http');
var url = require('url');
var port = process.argv[2];

var server = http.createServer(function(req, res) {
	if (req.method == 'GET') {
		var parsed = url.parse(req.url, true);
		if (parsed.pathname == '/api/parsetime') {
			res.writeHead(200, { 'Content-Type': 'application/json' });
			var d = new Date(parsed.query.iso);
			res.end(JSON.stringify({
				hour: d.getHours(),
				minute: d.getMinutes(),
				second: d.getSeconds()
			}));
		}
		else if (parsed.pathname == '/api/unixtime') {
			res.writeHead(200, { 'Content-Type': 'application/json' });
			var d = new Date(parsed.query.iso);
			res.end(JSON.stringify({ unixtime: d.getTime() }));
		}
		else {
			res.end();
		}
	}
	else {
		res.end();
	}
});

server.listen(port);
