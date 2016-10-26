var gulp = require('gulp');
var fileinclude = require('gulp-file-include');
var dm_concat = require('./plugin/model-conact');

var uglify = require('gulp-uglify')

gulp.task('default', function(arg) {
  gulp
  	.src('page/**.html')
    .pipe(dm_concat())
    .pipe(gulp.dest('output/'));

});
