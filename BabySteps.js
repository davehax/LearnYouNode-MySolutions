// console.log(process.argv); // uncomment to see the command line parameters

if (process.argv.length <= 2) {
	console.log(0);
	return;
}

// Extract the numbers from the command line
var nums = process.argv.slice(2, process.argv.length);
// add them all together using forEach
var outputNum = 0;
nums.forEach(function(num) {
	outputNum += parseInt(num);
});
// print to stdout
console.log(outputNum);
