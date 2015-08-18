'use strict';

var soft404 = require('./soft-404');

module.exports = function(request, options) {
  var shouldReport = !options.allowSoft404 && soft404(request, options); 
  return shouldReport;
};
