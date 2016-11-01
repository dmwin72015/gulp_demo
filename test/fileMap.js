/**
 * Created by dongmin on 16-10-31.
 */
const fs = require('fs');
const path = require('path');


/**
 * 循环读取子目录
 * */
function readDir(dir, flag) {
  var json = {res:{}};
  var abs_dir = path.resolve(__dirname,dir);
  var fileArr = [];

  try {
    var res = fs.readdirSync(abs_dir);
  } catch (e) {
    console.log(e);
    return [];
  }

  res.forEach(function (value) {
    var filepath = abs_dir+'/'+value
    if (isFile(filepath)) {
      json.res[value] = filepath;
    }else{

    }
    fileArr.push(filepath);
  });
  console.log(fileArr);
}

//判断是否是文件
function isFile(dir) {
  return fs.existsSync(dir) && fs.statSync(dir).isFile();
}

//判断是否是目录
function isDir(dir) {
  return fs.existsSync(dir) && fs.statSync(dir).isDirectory();
}


function Dirtree(dir) {
  return this._init(dir);
}

Dirtree.prototype.filesJson = {};

Dirtree.prototype._init = function (dir) {

};

readDir('/home/dongmin/projects/gulp_demo');