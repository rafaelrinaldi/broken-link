'use strict';

var parseUrl = require('url').parse;

// More on soft 404: https://en.wikipedia.org/wiki/HTTP_404#Phony_404_errors
module.exports = function(request, options) {
  var newUrl = request.uri.href;
  var wasRedirected = parseUrl(newUrl).path != parseUrl(options.uri).path;
  var is404Page = options.match404Page.test(newUrl); 
  var shouldReportRedirect = !options.allowRedirects && wasRedirected;
  var shouldReport404Page = !options.allow404Pages && is404Page;

  return shouldReportRedirect || shouldReport404Page;
};
