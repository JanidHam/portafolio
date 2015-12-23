var gulp       = require('gulp')
var webserver  = require('gulp-webserver')
var stylus     = require('gulp-stylus')
var nib        = require('nib')
var minifyCSS  = require('gulp-minify-css')
var browserify = require('browserify')
var babelify   = require('babelify')
var source     = require('vinyl-source-stream')
var buffer     = require('vinyl-buffer')
var uglify     = require('gulp-uglify')
var smoosher   = require('gulp-smoosher')
var imageop    = require('gulp-image-optimization')

var config = {
	styles: {
		main: './src/styles/main.styl',
		watch: './src/styles/**/*.styl',
		output: './build/css/'
	},
	html: {
		watch: './src/*.html'
	},
	scripts: {
		main: './src/scripts/main.js',
		watch: './src/scripts/**/*.js',
		output: './build/js/'
	},
	images: {
		watch: ['./build/img/*.png', './build/img/*.jpg'], //Se llama en forma de arreglo porque se puede tener varios formatos de imagenes
		output: './dist/img/'
	}
}

gulp.task('server', function () {
	gulp.src('./build')
		.pipe(webserver({
			host: '0.0.0.0',
			port: 8080,
			livereload: true
		}))
})

gulp.task('build:css', function () {
	gulp.src(config.styles.main)
		.pipe(stylus({
			use: nib(),
			import: ['nib'], //Con esta línea se ejecuta el nib, es decir los prefijos que necesitan los demas navegadores para entener algunos estilos css
			'include css': true
		}))
		.pipe(minifyCSS())
		.pipe(gulp.dest(config.styles.output))
})

gulp.task('build:js', function () {
	return browserify(config.scripts.main)
		.transform(babelify)
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(buffer())
		//.pipe(uglify())
		.pipe(gulp.dest(config.scripts.output))
})

gulp.task('watch', function() {
	gulp.watch(config.images.watch, ['images'])
	gulp.watch(config.scripts.watch, ['build:js'])
	gulp.watch(config.styles.watch, ['build:css'])
	gulp.watch(config.html.watch, ['build'])
})

gulp.task('images', function () {
	gulp.src(config.images.watch)
		.pipe(imageop({
			optimizacionLever: 5,
			progressive: true,
			interlaced: true
		}))
		.pipe(gulp.dest(config.images.output))
})

gulp.task('inline', function () {
	gulp.src('./build/index.html')
		.pipe(smoosher())
		.pipe(gulp.dest('./dist/'))
})

gulp.task('build', ['build:css', 'build:js', 'images'] )

gulp.task( 'default', ['server', 'watch', 'build'] )