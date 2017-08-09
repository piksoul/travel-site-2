var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
cssImport = require('postcss-import'),
nested = require('postcss-nested'),
mixins = require('postcss-mixins'),
hexrgba = require('postcss-hexrgba');

gulp.task('styles', function() {
	return gulp.src('./app/assets/styles/styles.css')
		.pipe(postcss([cssImport, mixins, cssvars, nested, hexrgba, autoprefixer]))
		.on('error', function(errorInfo) {
			console.log(errorInfo.toString());
			this.emit('end');
		})
		.pipe(gulp.dest('./app/temp/styles'));
});