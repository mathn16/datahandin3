'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.entryGetEntriesGET = function entryGetEntriesGET (req, res, next) {
  Default.entryGetEntriesGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
