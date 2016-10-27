var gulp = require('gulp');
var fileinclude = require('gulp-file-include');
var dm_concat = require('./plugin/model-conact');
var path = require('path');
var uglify = require('gulp-uglify');

const gulp_less = require('gulp-less');
const gulp_minify_css = require('gulp-minify-css');
const gulp_rename = require('gulp-rename');
const concat = require('gulp-concat');
const md5_rev = require('gulp-rev');


var projetc_dir = process.cwd();

gulp.task('default', function (arg) {
  gulp
    .src('page/**.html')
    .pipe(fileinclude({
      basepath:projetc_dir
    }))
    .pipe(gulp.dest('output/'));

});

/*
* 压缩合并css
* TODO:目前冲突未解决
* */
gulp.task('less', function () {
  gulp.src('widget/linuxpage/**/*.less')
    .pipe(concat('linux-page.min.css'))
    .pipe(gulp_less())
    .pipe(gulp_minify_css({
      keepBreaks:true,
      removeEmpty:true
    }))
    // .pipe(md5_rev())
    .pipe(gulp.dest('static/css/'))
    // .pipe(md5_rev.manifest())
    // .pipe(gulp.dest('output/'))
    ;
});


gulp.task('test', function (arg) {

  console.log(gulp.src('page/**.html'));

});
