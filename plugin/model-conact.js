'use strict';
const through = require('through2');
const gutil = require('gulp-util');
const pp = require('preprocess');
const concat = require('concat-stream');
const _ = require('lodash');
const PluginError = gutil.PluginError;

var whitespace = "[\\x20\\t\\r\\n\\f]";
var includeType = ['file', 'widget'];

/*
 * 默认配置
 * */
var DEFAULT_OPTIONS = {
  includeType: 'file',
  prefix: '@@'
}

function index(options) {
  options = _.assign(options || {});
  var dmStrm = through.obj(includeFile);
  return dmStrm;
}

/*
 * 获取文件的流
 * */
function includeFile(file, enc, cb) {
  if (file.isNull()) {
    cb(null, file);
  } else if (file.isStream()) {
    file.contents.pipe(concat(function (data) {
      console.log(data)

    }));

  } else if (file.isBuffer()) {

  }
}

/*
 * 删除注释的引用语法
 * */
function delCommentIcludes(content, opts) {
  // 使用正则匹配
  var regex = new RegExp('<\!--(.*)' + opts.prefix + '[ ]*include([\\s\\S]*?)[ ]*' + opts.suffix + '-->', 'g');
  return content.replace(regex, '');
}

/*
 * 使用正则替换包含内容
 * */

function repCommentIncludes(source, include) {


}


/*
 * 获取包含文件的路径
 * */

function getIncludeFileStr(path) {


}
/*
* 删除文档中的空格、换行
* */
function removeSpace(){

}



module.exports = index;