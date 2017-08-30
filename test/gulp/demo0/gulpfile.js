var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var concat = require('gulp-concat');
//gulp css命令行执行
gulp.task('build:css', function () {
    gulp.src('./src/css/*.css')
        .pipe(concat('index-merge.css'))
        .pipe(cssnano())
        .pipe(gulp.dest('dist/css/'));
});

//gulp default命令行执行
gulp.task('default', ['build:css']);