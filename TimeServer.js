var net = require('net');
var port = process.argv[2];

String.prototype.padLeft = function (paddingValue) {
   return String(paddingValue + this).slice(-paddingValue.length);
};

function handleConnection(socket) {
	var date = new Date();

	var year = '' + date.getFullYear();
	var month = '' + (date.getMonth() + 1);
	var day = '' + date.getDate();
	var hours = '' + date.getHours();
	var minutes = '' + date.getMinutes();

	var dateStr = year + '-'
	+ month.padLeft('00') + '-'
	+ day.padLeft('00') + ' '
	+ hours.padLeft('00') + ':'
	+ minutes.padLeft('00')
	+ '\n';

	socket.end(dateStr);
}

var server = net.createServer(handleConnection);
server.listen(port);
