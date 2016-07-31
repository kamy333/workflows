/**
 * Created by Kamran on 31-Jul-16.
 */

var gulp=require('gulp'),
gutil=require('gulp-util'),
coffee=require('gulp-coffee'),
concat=require('gulp-concat'),
 browserify=require('gulp-browserify');


var coffeeSources=['components/coffee/tagline.coffee'];
var jsSources='components/scripts/*.js';

gulp.task('log',function () {
    gutil.log('I just love gulp!');
});


gulp.task('coffee',function () {
    gulp.src(coffeeSources)
        .pipe(coffee({bare:true}))
        .on('error',gutil.log)
        .pipe(gulp.dest('components/scripts'))
});

gulp.task('js',['coffee'],function () {
    gulp.src(jsSources)
        .pipe(concat('script.js'))
        .pipe(browserify())
        .pipe(gulp.dest('builds/development/js'))
});