var gulp = require('gulp');
var bump = require('gulp-bump');
var git = require('gulp-git')

gulp.task ('gulp-branch', function(){
    git.checkout('gulp', {args:'-b'}, function(err) {
        if (err) throw err;
    });
});

gulp.task('bump-hotfix', function(){
    return gulp.src(['./package.json'])
        .pipe(bump({type: 'patch'}))
        .pipe(gulp.dest('./'));
});

gulp.task('bump-minor', function(){
    return gulp.src(['./package.json'])
        .pipe(bump({type: 'minor'}))
        .pipe(gulp.dest('./'));
});

gulp.task('bump-major', function(){
    return gulp.src(['./package.json'])
        .pipe(bump({type: 'major'}))
        .pipe(gulp.dest('./'));
});

gulp.task('release-minor', gulp.series(
    'gulp-branch',
    'bump-minor'
));