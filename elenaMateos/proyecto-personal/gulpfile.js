var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps')

gulp.task('sass', function(){
  return gulp.src('styles/style.scss')
  .pipe(sourcemaps.init())
  .pipe(sass.sync().on('error', sass.logError))
  .pipe(gulp.dest('./styles'));
});
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});
gulp.task('default', ['sass']);
// watch sass para arrancar 
