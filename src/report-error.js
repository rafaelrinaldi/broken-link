'use strict';

module.exports = function(error, options) {
  var shouldIgnore = !!~options.ignoreErrors.indexOf(error);
  var shouldReport = !shouldIgnore;

  return shouldReport;
};
