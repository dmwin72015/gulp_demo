const stream = require('stream');
const util = require('util');
const through = require('through2');

const test = require('../plugin/model-conact.js')

const reader = stream.Readable;
const writer = stream.Writable;

util.inherits(Counter, reader);

function Counter(opt) {
  reader.call(this, opt);
  this._max = 1000000;
  this._index = 1;
}

Counter.prototype._read = function() {
  var i = this._index++;
  if (i > this._max)
    this.push(null);
  else {
    var str = '' + i;
    var buf = new Buffer(str, 'ascii');
    this.push(buf);
  }
};
Counter.prototype.toString = function(){
	return this.buffer.toString();
}
var c1 = new Counter;
var c2 = new Counter;
c1.push('中国');
c1.push('帝都');
console.log(c1.toString());
