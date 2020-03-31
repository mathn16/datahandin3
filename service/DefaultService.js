'use strict';


/**
 *
 * returns List
 **/
exports.entryGetEntriesGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "timeStamp" : "timeStamp",
  "temp" : 6,
  "lumen" : 0,
  "receivedDate" : "receivedDate"
}, {
  "timeStamp" : "timeStamp",
  "temp" : 6,
  "lumen" : 0,
  "receivedDate" : "receivedDate"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

