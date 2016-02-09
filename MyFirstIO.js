var fs = require('fs');

// Define a function for counting the number of instances of a char in a string
String.prototype.countOf = function(char) {
	return this.split(char).length - 1;
}

if (process.argv.length >= 3) {
	var buffer = fs.readFileSync(process.argv[2]);
	// We need to find the total amount of newline characters in the buffer
	// First, convert the buffer to string
	var str = buffer.toString();
	// Use our function above to count the number of newlines
	var count = str.countOf('\n');
	// print to stdout
	console.log(count);
}
