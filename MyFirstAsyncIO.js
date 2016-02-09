var fs = require('fs');

// Define a function for counting the number of instances of a char in a string
String.prototype.countOf = function(char) {
	return this.split(char).length - 1;
}

fs.readFile(process.argv[2], 'utf8', function(err, data) {
	if (err) {
		console.error(err);
		return;
	}

	var lines = data.countOf('\n');
	console.log(lines);
});
