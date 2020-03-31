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
				let obj = JSON.parse(data); //now it an object
				body['receivedDate'] = Math.round(Date.now() / 1000);
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
