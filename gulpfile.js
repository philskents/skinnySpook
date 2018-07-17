var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var requireDir = require('require-dir');
var runSequence = require('run-sequence');

requireDir('./gulp');

gulp.task('cleanCSS', function() {
    return gulp.src('assets/css/src/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('assets/css'))
})

gulp.task('watch', function (){
    gulp.watch('assets/css/src/*.css', ['cleanCSS']);
})

gulp.task('release-minor', function(){
    runSequence('gulp-branch', 'bump-minor');
});