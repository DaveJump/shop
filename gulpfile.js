var gulp = require('gulp');
var rev = require('gulp-rev');
var revReplace = require('gulp-rev-replace');
var useref = require('gulp-useref');
var filter = require('gulp-filter');
var uglify = require('gulp-uglify');
var csso = require('gulp-csso');

gulp.task('build',function(){
	var jsFilter = filter('**/*.js',{restore: true});
	var cssFilter = filter('**/*.css',{restore: true});
	var revFilter = filter(['**/*','!**/index.html','!**/single.html','!**/account.html'],{restore: true});

	return gulp.src(['src/index.html','src/single.html','src/account.html'])
		.pipe(useref())
		.pipe(jsFilter)
		.pipe(uglify())
		.pipe(jsFilter.restore)
		.pipe(cssFilter)
		.pipe(csso())
		.pipe(cssFilter.restore)
		.pipe(revFilter)
		.pipe(rev())
		.pipe(revFilter.restore)
		.pipe(revReplace())
		.pipe(gulp.dest('dist'));
});
