var gulp = require('gulp');
var bump = require('gulp-bump');
var git = require('gulp-git')

gulp.task ('gulp-branch', function(){
    git.checkout('gulp', {args:'-b develop'}, function(err) {
        if (err) throw err;
    });
});

gulp.task('bump-hotfix', function(){
    return gulp.src(['./package.json'])
        .pipe(bump({type: 'patch'}))
        .pipe(gulp.dest('./'));
});

gulp.task('bump-hotfix', function(){
    return gulp.src(['./package.json'])
        .pipe(bump({type: 'patch'}))
        .pipe(gulp.dest('./'));
});

gulp.task('bump-hotfix', function(){
    return gulp.src(['./package.json'])
        .pipe(bump({type: 'patch'}))
        .pipe(gulp.dest('./'));
});