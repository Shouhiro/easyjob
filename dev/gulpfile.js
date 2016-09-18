var gulp = require('gulp'),
	jade = require('gulp-jade'),
	babel = require("gulp-babel"),
	clean = require('gulp-clean'),
	compass = require('gulp-compass');


gulp.task('default',['monitor','babel','jade']);

gulp.task('babel',function(){
	gulp
   		.src('js/**/*.js')
   		.pipe(babel({
   			minified:true // 压缩编译后的js
   		}))
        .pipe(gulp.dest('../pro/js/'));
});

gulp.task('compass',function() {
	gulp
   		.src('compass/**/*.scss')
   		.pipe(compass({
   			config_file:'compass/config.rb',
   			css:'../pro/css',
   			sass:'compass/sass'
   		}))
        .pipe(gulp.dest('../pro/css/'));
});

gulp.task('jade',function(){
	gulp
		.src('pages/**/[^_]*.jade')
		.pipe(jade({
			//pretty:true // 格式化html
		}))
		.pipe(gulp.dest('../pro/pages/'));
});

gulp.task('images',function(){
	gulp
		.src('images/**/icons-*')
		.pipe(gulp.dest('../pro/images/icons'));

	gulp
		.src('images/logo/*')
		.pipe(gulp.dest('../pro/images/logo'));

	gulp
		.src('images/view/**/*')
		.pipe(gulp.dest('../pro/images/view'));

	gulp.src('images/**/icons-*').pipe(clean());
});

gulp.task('monitor',function(){
	gulp.watch('js/**/*.js',['babel']);
	gulp.watch('pages/*.jade',['jade']);
	gulp.watch('compass/**/*.scss',['compass']);
	gulp.watch('images/**/icons-*',['images']);
});