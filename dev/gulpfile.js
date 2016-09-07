var gulp = require('gulp'),
	jade = require('gulp-jade'),
	babel = require("gulp-babel");


gulp.task('default',['monitor','babel']);

gulp.task('babel',function(){
	return gulp
	       		.src('js/**/*.js')
	       		.pipe(babel({
	       			minified:true
	       		}))
	            .pipe(gulp.dest('../pro/js/'));
});

gulp.task('jade',function(){
	gulp
		.src('pages/*.jade')
		.pipe(jade({
			pretty:true
		}))
		.pipe(gulp.dest('../pro/page/'));
});

gulp.task('monitor',function(){
	gulp.watch('js/**/*.js',['babel']);
	gulp.watch('pages/*.jade',['jade']);
});