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

module.exports.entryGetEntriesGET = function entryGetEntriesGET (req, res, next) {
  Entry.entryGetEntriesGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.resetEntriesPOST = function resetEntriesPOST (req, res, next) {
  Entry.resetEntriesPOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
