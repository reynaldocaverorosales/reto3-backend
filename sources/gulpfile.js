var gulp = require('gulp');
var	jade = require('gulp-jade');
var browserify = require('gulp-browserify');


// primeta tarea
gulp.task('jade', function() {
	// usando jade()
	gulp.src('node_modules/src/templates/**/*.jade')
	.pipe(jade())
	.pipe(gulp.dest('builds/development/views'));
});
//segunda tarea
gulp.task('js', function() {
	// usando browserify 
	gulp.src('node_modules/src/js/collections/*.js')
	.pipe(browserify({ debug:true}))
	.pipe(gulp.dest('builds/development/js'));
});
