'use strict';
var fs = require('fs');
const path = require('path');
const pathToFile = './samples.json';
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
