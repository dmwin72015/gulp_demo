/**
 * Created by dongmin on 16-11-1.
 */

const fs = require('fs');
const stream = require('stream');
const Writeable = stream.Writable;
const through2 = require('through2');
var ws = Writeable();

ws._write = function (chunk, enc, next) {
  Writeable.call(this);
  
  this.writeck = chunk;
  next(null,this.writeck);
};

ws.on('data', function (chunk, enc, cb) {
  console.log('数据传入......');
});

ws.on('end', function () {

  console.log('写完了....');
});
ws.on('error', function (err) {
  console.dir(err);
})

var th2_stream = through2.obj({}, function (chunk, ebc, cb) {
  cb(null, chunk);
});

var testdata = {
  name: '张三',
  age: 20,
  addr: '上海'
};
/*
 * through2 封装方式
 * */

/*th2_stream.on('data', function (chunk) {
  console.log(chunk);
  console.log('写入东东........');
});

th2_stream.write(testdata);

setTimeout(function () {
  th2_stream.write('aaaaaa');
}, 2000)*/

/*
 * Node 原生的stream模块方式
 * */

ws.write(testdata);