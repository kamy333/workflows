/**
 * Created by Kamran on 31-Jul-16.
 */

gulp=require('gulp');
gutil=require('gulp-util');
coffee=require('gulp-coffee');

var coffeeSources=['components/coffee/tagline.coffee'];

gulp.task('log',function () {
    gutil.log('I just love gulp!');
});


gulp.task('coffee',function () {
    gulp.src(coffeeSources)
        .pipe(coffee({bare:true}))
        .on('error',gutil.log)
        .pipe(gulp.dest('components/scripts'))
});
