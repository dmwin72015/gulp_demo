/**
 * Created by dongmin on 16-10-25.
 */
'use strict';
var fs = require('fs');
var stream = require('stream');
var tool = require('../util/tool');

var src = '/media/sf_vmshare/WebStorm-2016.2.3.tar.gz';
// var src = __dirname + '/demo.js';
var dest = '/home/dongmin/fy/web.tar.gz';

var readStrm = fs.createReadStream(src);
var writeStrm = fs.createWriteStream(dest);

var startTime = Date.now();
var totleSize = 0;


readStrm.on('data', (chunk)=> {
  // console.log('开始读取数据了.....');
  totleSize += chunk.length;
  if (writeStrm.write(chunk) === false) {
    readStrm.pause();
  }
});
//
readStrm.on('end', ()=> {
  var endTime = Date.now();

  console.log('总大小：%d%s.', (totleSize / 1024 / 1024).toFixed(2), 'mb');
  console.log('读完了,用时：' + (endTime - startTime) / 1000 + 's');

});



// readStrm.on('readable', ()=> {
//   console.log('可以读取数据了.....');
//   readStrm.setEncoding('utf-8');
//   var buff = readStrm.read();
//   console.log(buff);
// });

writeStrm.on('drain', ()=> {
  readStrm.resume();

});
