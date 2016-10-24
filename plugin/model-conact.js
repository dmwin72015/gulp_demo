'use strict';
var through = require('through2');
var gutil = require('gulp-util');
var pp = require('preprocess');

var PluginError = gutil.PluginError;

var whitespace = "[\\x20\\t\\r\\n\\f]";

function getIncludeLocation() {



}


function dm_concat(options) {
  console.log(this);
  return through.obj(function(file, enc, cb) {
    console.log(file);

    console.log(typeof file);
    // streamToString(file, (err, str) => {
    //   console.log(str);
    // })

    console.log('\n' + enc);
    console.log('\n' + cb);
  });
}


function streamToString(stream, cb) {
  stream.on('readable', function() {
    var read = stream.read();
    if (read !== null) {
      output += read.toString();
    } else {
      cb(null, output);
    }
  });
}
module.exports = dm_concat;
module.exports.dd = 12;

module.exports.bb = {
  a:12
};



