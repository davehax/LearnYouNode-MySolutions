var myModule = require('./MakeItModular');

myModule(process.argv[2], process.argv[3], function(err, data) {
	if (err) {
		console.error(err);
		return;
	}

	if (typeof(data) != 'undefined') {
		data.forEach(function(item) {
			console.log(item);
		})
	}
});
