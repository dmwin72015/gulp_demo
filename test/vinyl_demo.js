/**
 * Created by dongmin on 16-10-28.
 */

const v_fs = require('vinyl-fs');
const glob = require('glob');
const through2 = require('through2');
const path = require('path');
const gs = require('glob-stream');


var _root = process.cwd();

var strm = v_fs.src(_root + '/test/*.js');


var fileDir = _root + '/*.js';
// console.log(fileDir);

glob(fileDir, function (err, files) {

});


var globber = new glob.Glob(fileDir, function (err, files) {

});


/*
 * glob.Glob
 * It's an EventEmitter, and starts walking the filesystem to find matches immediately.
 * 这是一个继承了EventEmitter（事件监听类）的类，实例化之后立即开始遍历文件系统找出匹配的文件
 * */
globber.on('match', function (filename) {

});



function change(file, cb) {
  console.log(file);
  // var buff = new Buffer('测试内容');
  // file = Buffer.concat([file,buff]);
  cb(null, file);
}


var th_stream = through2.obj(function (a, b, c) {

  console.log(a,b,c);
});

th_stream.write({
  cwd:'aaa',
  base:'base',
  path:path.normalize('/aaa/bb.txt')
})


th_stream.write({
  cwd:'bbb',
  base:'cccc',
  path:path.normalize('/aaa/ddd.txt')
})

// console.log(th_stream);