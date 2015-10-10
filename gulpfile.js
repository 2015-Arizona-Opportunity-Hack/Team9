var gulp = require('gulp'),
  sass = require('gulp-sass'),
  concat = require('gulp-concat');

gulp.task('sass', function () {
  gulp.src('./lib/sass/app.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('concatScripts', function() {
  return gulp.src(['./lib/js/*.js', './lib/js/**/*.js', './bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js'])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./public/js'));
});

gulp.task('default', function () {
  gulp.watch(['./lib/sass/*.sass', './lib/sass/**/*.sass'], ['sass']);
  gulp.watch(['./lib/js/*.js', './lib/js/**/*.js', './lib/js/**/**/*.js'], ['concatScripts']);
  gulp.watch(['./gulpfile.js'], ['default']);
});
