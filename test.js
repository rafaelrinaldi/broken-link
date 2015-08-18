'use strict';

var brokenLink = require('./');
var test = require('tape');
var timestamp = +new Date();

test('check broken links', function (t) {
  t.test('totally broken link should be broken', function(t) {
    t.plan(1);
    
    brokenLink('http://www.totally-broken-link.com/foo').then(function(answer) {
      t.equal(answer, true);
    });
  });
  
  t.test('Google\'s main page should not be broken', function(t) {
    t.plan(1);
    
    brokenLink('http://google.com', {allowRedirects: true}).then(function(answer) {
      t.equal(answer, false);
    });
  });

  t.test('Google\'s invalid page should be broken', function(t) {
    t.plan(1);
    
    brokenLink('http://google.com/' + timestamp).then(function(answer) {
      t.equal(answer, true);
    });
  });
  
  t.end();
});
