# broken-link [![Build Status](https://travis-ci.org/rafaelrinaldi/broken-link.svg?branch=master)](https://travis-ci.org/rafaelrinaldi/broken-link)

> Check wether or not a link is broken.

## Install

```sh
$ npm install broken-link --save
```

## Usage

```javascript
var brokenLink = require('broken-link');

brokenLink('http://non-existing-domain-name.com')
          .then(function(answer) {
            console.log('link is%s broken', answer ? '' : ' not'); // link is broken
          });
```

## API

To determine if a link is broken, *some* of the following must be true:

1. Request fails with an error.
2. Request response status code is `404`.
3. Response identified a redirect.
4. Page URL matches [`options.match404Page`](#optionsmatch404page). 

Note that this is the default behavior but you can fully customize it.

## `brokenLink(url, [options])`

Return: `promise` 

### `url`

*Required*
Type: `string`  

URL to test against.

### `options`

Type: `object`  

Available options.

#### `options.allowRedirects`

Type: `boolean`  
Default: `false`  

Wether or not to allow redirects.

#### `options.allow404Pages`

Type: `boolean`  
Default: `false`  

Wether or not 404 pages are allowed. To tell if it's a 404 page, it will test again the request URL. See [`options.match404Page`](#optionsmatch404page).

#### `options.allowSoft404`

Type: `boolean`  
Default: `false`  

This is an alias to both `options.allowRedirects` and `options.allow404Pages`. For more information about soft 404's, [click here](https://en.wikipedia.org/wiki/HTTP_404#Phony_404_errors).

#### `options.ignoreErrors`

Type: `array`  
Defaults: an empty array  

List of error codes that should be ignored.

#### `options.ignoreStatusCodes`

Type: `array`  
Defaults: an empty array  

List of status codes that should be ignored.

#### `options.match404Page`

Type: `regexp`  
Default: `/404|erro|page/i`

Pattern that checks if a URL can be considered a 404 page.

## License

MIT © [Rafael Rinaldi](http://rinaldi.io)
