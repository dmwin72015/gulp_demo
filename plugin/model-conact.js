'use strict';
const through = require('through2');
const gutil = require('gulp-util');
const pp = require('preprocess');
const concat = require('concat-stream');
const _ = require('lodash');
const path = require('path');
const fs = require('fs');

const PluginError = gutil.PluginError;

var project_dir = process.cwd();
var whitespace = "[\\x20\\t\\r\\n\\f]";

/*
 * 默认配置
 * */
var default_opts = {
  includeType: ['file', 'widget'],
  prefix: '@@',
  basepath: '@file'
};

function index(opts) {
  opts = _.assign(default_opts, opts || {});
  if (opts.basepath !== '@file') {
    opts.basepath = opts.basepath === '@root' ? process.cwd() : path.resolve(opts.basepath);
  }
  var dmStrm = through.obj(function (file, enc, cb) {
    includeFile(file, enc, cb, opts);
  });
  return dmStrm;
}

/*
 * 获取文件的流
 * */
function includeFile(file, enc, cb, opts) {
  if (file.isNull()) {
    cb(null, file);
  } else if (file.isStream()) {
    file.contents.pipe(concat(function (data) {

    }));

  } else if (file.isBuffer()) {
    try {
      file = getInclude(file, String(file.contents), opts);
      cb(null, file);
    } catch (e) {
      cb(new gutil.PluginError('失败', e.message));
    }
  }
}

function getInclude(file, text, opts) {
  var filebase = opts.basepath === '@file' ? path.dirname(file.path) : opts.basepath;

  console.log(file.path);

  getIncludeFileDir(file.base, String(file.contents));

  console.log(delWhiteSpace(String(file.contents)));

  return file;
}


/*
 * 删除注释掉的的引用语法
 * */
function delCommentIcludes(content, opts) {
  // 使用正则匹配
  var regex = new RegExp('<\!--(.*)' + opts.prefix + '[ ]*include([\\s\\S]*?)[ ]*' + opts.suffix + '-->', 'g');
  return content.replace(regex, '');
}

/*
 * 删除注释信息
 * */

function delCommentAll(content) {
  var regex = new RegExp('<!--(.*) -->', 'g');
  return content.replace(regex, '');
}

/*
 * 删除文档中的空格、换行（压缩）
 * */
function delWhiteSpace(content) {
  var regex = new RegExp(whitespace, 'g');
  return content.replace(regex, '');
}

/*
 * 使用正则替换包含内容
 * */

function repCommentIncludes(path, content) {


}


/*
 * 获取包含文件的路径和内容
 * */

function getIncludeFileDir(base, content) {
  var regex = '@@(\\w+)\\((.*)\\)';
  var arrRes = content.match(new RegExp(regex, 'ig'));
  var arrDir = [];
  if (arrRes) {
    for (var i = 0, len = arrRes.length; i < len; i++) {
      var tmpDir = arrRes[i].match(new RegExp(regex, 'i'));
      if (tmpDir && tmpDir[1] && tmpDir[2]) {
        var data = {
          src: tmpDir[0],
          srcpath: tmpDir[2].trim().replace(/['"]+/g, ''),
          type: tmpDir[1].trim()
        };
        data.fullapth = path.resolve(path.dirname(base), data.srcpath);
        data.filename = path.basename(data.srcpath);
        arrDir.push(data);
      }
    }
  }
  return arrDir;
}


function getIncludeFileContent() {

}


module.exports = index;
