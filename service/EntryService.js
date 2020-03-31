'use strict';

/**
 * Adds a new entry
 *
 * body Entry  (optional)
 * no response value expected for this operation
 **/
exports.addEntry = function(body) {
	return new Promise(function(resolve, reject) {
		fs.readFile(path.resolve(pathToFile), 'utf8', function readFileCallback(
			err,
			data
		) {
			console.log(body);
			if (err) {
				console.log(err);
				resolve();
			} else {
				let obj = JSON.parse(data); //now it an object
				body['receivedDate'] = Math.round(Date.now() / 1000);
				obj.push(body); //add some data
				let jsonString = JSON.stringify(obj); //convert it back to json
				fs.writeFile(
					path.resolve(pathToFile),
					jsonString,
					'utf8',
					(err, data) => {
						if (err) {
							console.log(err);
						}
						resolve();
					}
				);
			}
		});
	});
};

/**
 *
 * returns List
 **/
exports.entryGetEntriesGET = function() {
	return new Promise(function(resolve, reject) {
		fs.readFile(path.resolve(pathToFile), 'utf8', function(err, data) {
			if (err) {
				console.log(err);
				resolve();
			} else {
				console.log(data);
				resolve(JSON.parse(data));
			}
		});
	});
};

/**
 *
 * no response value expected for this operation
 **/
exports.resetEntriesPOST = function() {
	return new Promise(function(resolve, reject) {
		fs.writeFile(path.resolve(pathToFile), '[]', 'utf8', (err, data) => {
			if (err) {
				console.log(err);
			}
			resolve();
		});
	});
};
