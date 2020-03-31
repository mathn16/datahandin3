'use strict';
const path = require('path');
const fs = require('fs');
const pathToFile = './samples.json';
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
			if (err) {
				console.log(err);
				resolve();
			} else {
				obj = JSON.parse(data); //now it an object
				obj.push(body); //add some data
				json = JSON.stringify(obj); //convert it back to json
				fs.writeFile(path.resolve(pathToFile), json, 'utf8', (err, data) => {
					if (err) {
						console.log(err);
					}
					resolve();
				});
			}
		});
	});
};
