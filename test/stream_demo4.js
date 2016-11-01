/**
 * Created by dongmin on 16-10-31.
 */
const stream = require('stream');
const readable = stream.Readable;
const writeable = stream.Writable;
const transform = stream.Transform;
const util = require('util');

const gs = require('glob-stream')
const through2 = require('through2');

util.inherits(demoWriteable, transform);

function demoWriteable() {
  writeable.call(this);

  this._storage = new Buffer('');
}

/*
* 普通的重写，把chunk当作buffer类型
* */
demoWriteable.prototype._write = function (chunk, ecoding, cb) {
  this._storage.concat([this._storage, chunk]);
  cb();
};

/*
* chunk为object
* */
demoWriteable.prototype._write = function (chunk, ecoding, cb) {
  this.wtitechunk = chunk;
  cb();
};


var dw_1 = new demoWriteable();

// dw_1.write({
//   path:'',
//   cwd:'',
//   filename:''
// });

var dmstream = gs.create('../test/**.js',{});
var thstream = through2.obj();
// console.dir(dmstream);

thstream.write({
  cwd:'my',
  pwd:'mu',
  filename:'aa.txt'
});

console.dir(thstream.write);

dmstream.on('data',function (file) {
  console.log('------'+file.path);
});

