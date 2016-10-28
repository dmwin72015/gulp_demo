/**
 * Created by dongmin on 16-10-27.
 */
const through = require('through2');
const _ = require('lodash');
const path = require('path');
const fs = require('fs');
const gutil = require('gulp-util');

const PluginError = gutil.PluginError;

module.exports = function () {

  return through.obj(function (file, enc, cb) {

    /* 对file处理之后，再传递回调函数
     但是这里只是分析目录结构，不需要去处理每一个文件，所以不使用源，手动生成新的File
    if (file.isNull()) {
      console.log(file.isDirectory());
      console.log(file);
      file.contents = new Buffer('jajaj');
      cb(null, file);

    } else if (file.isBuffer()) {

      file.contents = new Buffer('jajaj');
      cb(null, file);

    } else if (file.isStream()) {

    }
     */

    return;
  });

};

/*
 * 循环读取子目录
 * */
function readDir(dir, flag) {
  var json = {};

  console.log(dir);

  var res = fs.readdirSync(dir);

  console.log(res);

}

function getFileList(dir) {

  var res = fs.readdirSync(dir);
  console.log(res);
}
getFileList(process.cwd());
