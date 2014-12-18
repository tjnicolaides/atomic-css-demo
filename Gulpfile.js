var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var del = require('del');

gulp.task('clean', function(cb) {
	del(['css/**/*.css'], cb);
});

gulp.task('sass', function() {
	return gulp.src('scss/main.scss')
		.pipe(sass())
		.on('error', function(err) {
			console.log(err.message);
		})
		.pipe(gulp.dest('css'));
});

gulp.task('default', ['sass'], function() {
	gulp.watch("scss/**/*.scss", ['sass']);
});