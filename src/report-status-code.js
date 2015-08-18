'use strict';

module.exports = function(code, options) {
  var shouldIgnore = !!~options.ignoreStatusCodes.indexOf(code);
  var isInvalid = !!~options.invalidStatusCodes.indexOf(code);
  var shouldReport = !shouldIgnore && isInvalid;

  return shouldReport;
};
