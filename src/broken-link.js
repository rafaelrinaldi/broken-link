'use strict';

var request = require('request');
var objectAssign = require('object-assign');
var Promise = require('pinkie-promise');
var defaults = require('./defaults');
var reportError = require('./report-error');
var reportStatusCode = require('./report-status-code');
var reportSoft404 = require('./report-soft-404.js');

function brokenLink(url, options) {
  options = objectAssign(defaults, options, {uri: url});

  return new Promise(function(resolve, reject) {
    request(options)
          .on('response', function(response) {
            var shouldReportStatusCode = reportStatusCode(response.statusCode, options);
            var shouldReportSoft404 = reportSoft404(response.request, options);

            resolve(shouldReportStatusCode || shouldReportSoft404);
          })
          .on('error', function(error) {
            var shouldReportError = reportError(error.code, options);

            resolve(shouldReportError);
          });
  });
}

module.exports = brokenLink;
