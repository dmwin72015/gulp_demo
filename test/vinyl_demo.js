/**
 * Created by dongmin on 16-10-28.
 */

const v_fs = require('vinyl-fs');
const glob = require('glob');

var _root = process.cwd();

// var strm = v_fs.src(_root + '/test/*.js');

var fileDir = _root + '/*.js';
console.log(fileDir)

glob(fileDir , function (err,files) {

  console.log(files)
  
});
// console.log(strm);

//
// strm
//   .pipe(change())
//   .pipe(v_fs.dest('./output/'));


function change(file, cb) {
  console.log(file);
  // var buff = new Buffer('测试内容');
  // file = Buffer.concat([file,buff]);
  cb(null, file);
}