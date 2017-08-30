var gulp = require('gulp');

//引入插件
var browserSync = require('browser-sync').create();

gulp.task('reload', function () {
    browserSync.reload();
});

gulp.task('server', function () {
    browserSync.init({
        server: {
            baseDir: "./src"
        }
    });
});

gulp.watch(['**/*.css', '**/*.js', '**/*.html'], ['reload']);


var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
//css 预处理 和 后处理
gulp.task('dist: css', function () {
    gulp.src('dist/css/*').pipe(clean());
    return gulp.src('src/**/*.less')
        .pipe(less())
        .pipe(csso)
        .pipe(concat('merge.css'))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist/css'));

});

var rev = require('gulp-rev');//添加版本号
var revReplace = require('gulp-rev-replace');//版本号替换
var useref = require('gulp-useref');//解析html资源定位
//版本号替换 revision , useref实现自动化

gulp.task('revision', ['dist:css', 'dist:js'], function () {
    return gulp.src("dist/**/*.css", "dist/**/*.js")
        .pipe(rev())
        .pipe(gulp.dest('dist'))
        .pipe(rev.mainfest())
        .pipe(gulp.dest('dist'))
});

gulp.task("index", ["revision"], function () {
    var mainfest = gulp.src("./dist/rev-mainfest.json");

    return gulp.src("src/index.html")
        .pipe(revReplace({
                mainfest: mainfest
            }))
        .pipe(useref())
        .pipe(gulp.dest('dist'));
});







