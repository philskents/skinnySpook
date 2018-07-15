var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');

gulp.task('cleanCSS', function() {
    return gulp.src('assets/css/src/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('assets/css'))
})