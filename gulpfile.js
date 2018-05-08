var gulp           = require('gulp'),
		sass           = require('gulp-sass'),
		browserSync    = require('browser-sync'),
		concat         = require('gulp-concat'),
		uglify         = require('gulp-uglify'),
		cleanCSS       = require('gulp-clean-css'),
		rename         = require('gulp-rename'),
		del            = require('del'),
		cache          = require('gulp-cache'),
		autoprefixer   = require('gulp-autoprefixer'),
		gulpRemoveHtml = require('gulp-remove-html'),
		spritesmith    = require('gulp.spritesmith');

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false
	});
});

gulp.task('sass', function() {
	return gulp.src('app/sass/**/*.sass')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('app/css'))
		.pipe(autoprefixer(['last 15 versions']))
		.pipe(rename({suffix: '.min', prefix : ''}))
		.pipe(cleanCSS())
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({stream: true}))
});

gulp.task('sprite', function() {
	var spriteData =
	gulp.src('app/img/ico/*.*').pipe(spritesmith({
		imgName: 'sprite.png',
		cssName: '_sprite.sass',
		cssFormat: 'sass',
		algorithm: 'binary-tree',
		imgPath: '../img/sprite.png',
		padding: 5,
	}));
	spriteData.img.pipe(gulp.dest('app/img/'));
	spriteData.css.pipe(gulp.dest('app/sass/'));
})

gulp.task('libs', function() {
	return gulp.src([
		'app/libs/jquery/dist/jquery.min.js',
		// 'app/libs/slick/slick.min.js',
		// 'app/libs/remodal/remodal.min.js',
		])
		.pipe(concat('libs.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('app/js'));
});

gulp.task('watch', ['sass', 'libs', 'sprite', 'browser-sync'], function() {
	gulp.watch('app/sass/**/*.sass', ['sass']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('removedist', function() { return del.sync('dist'); });

gulp.task('buildhtml', function() {
	gulp.src(['app/*.html'])
		.pipe(gulpRemoveHtml())
		.pipe(gulp.dest('dist/'));
});

gulp.task('build', ['buildhtml', 'removedist', 'sass', 'libs'], function() {

	var buildCss = gulp.src([
		'app/css/fonts.min.css',
		'app/css/main.min.css'
		]).pipe(gulp.dest('dist/css'));

	var buildFiles = gulp.src([
		'app/.htaccess'
	]).pipe(gulp.dest('dist'));

	var buildFonts = gulp.src('app/fonts/**/*').pipe(gulp.dest('dist/fonts'));

	var buildJs = gulp.src('app/js/**/*').pipe(gulp.dest('dist/js'));

	var buildImgs = gulp.src('app/img/**/*').pipe(gulp.dest('dist/img'));

});

gulp.task('clearcache', function () { return cache.clearAll(); });

gulp.task('default', ['watch']);
