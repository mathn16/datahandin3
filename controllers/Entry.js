'use strict';

var utils = require('../utils/writer.js');
var Entry = require('../service/EntryService');

module.exports.addEntry = function addEntry (req, res, next, body) {
  Entry.addEntry(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
