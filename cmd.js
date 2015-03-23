#!/usr/bin/env node

var zort = require('./');

var start = +process.argv[2];
var end = +process.argv[3];
var options = {};

if (start) options.start = start;
if (end) options.end = end;

zort(function(err, port) {
  if (err) throw err;
  console.log(port);
}, options);
