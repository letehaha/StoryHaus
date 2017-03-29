var gulp 				= require('gulp'),
browserSync = require('browser-sync'),
sass 				= require('gulp-sass'),
del         = require('del'),
autoprefixer= require('gulp-autoprefixer'),
spritesmith = require('gulp.spritesmith')
imagemin 		= require('gulp-imagemin'),
svgSprite		= require('gulp-svg-sprites')
svgmin			= require('gulp-svgmin'),
replace			= require('gulp-replace');

gulp.task('sass', function(){
	return gulp.src('app/scss/main.scss')
	.pipe(sass())
	.pipe(autoprefixer({
		browsers: ['last 6 versions'],
		cascade: false
	}))
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream: true}))
});

gulp.task('imagemin', function(){
	return gulp.src('app/img/**/*')
	.pipe(imagemin())
	.pipe(gulp.dest('app/img/'))
	.pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function(){
	browserSync({
		server: {
			baseDir : 'app'
		},
		notify: false
	})
});

gulp.task('sprite', function () {
	var spriteData = gulp.src('app/img/icons/*.svg').pipe(spritesmith({
		imgName: 'sprite.svg',
		cssName: 'sprite.scss'
	}));
	return spriteData.pipe(gulp.dest('app/sprites/'));
});

// var assetsDir = 'app/img/';

// gulp.task('svgSpriteBuild', function () {
// 	return gulp.src(assetsDir + 'icons/*.svg')
// 		// minify svg
// 		// .pipe(svgmin({
// 		// 	js2svg: {
// 		// 		pretty: true
// 		// 	}
// 		// }))
// 		// remove all fill and style declarations in out shapes
// 		// .pipe(cheerio({
// 		// 	run: function ($) {
// 		// 		$('[fill]').removeAttr('fill');
// 		// 		$('[style]').removeAttr('style');
// 		// 	},
// 		// 	parserOptions: { xmlMode: true }
// 		// }))
// 		// cheerio plugin create unnecessary string '>', so replace it.
// 		.pipe(replace('&gt;', '>'))
// 		// build svg sprite
// 		.pipe(svgSprite({
// 				mode: 'symbols',
// 				preview: false,
// 				svg: {
// 					symbols: 'symbol_sprite.html'
// 				}
// 			}
// 		))
// 		.pipe(gulp.dest(assetsDir + 'i/'));
// });

gulp.task('watch', ['browser-sync', 'sass'], function(){ //   , 'imagemin'
	gulp.watch('app/scss/**/*.scss', ['sass']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/*.сss', browserSync.reload);
	// gulp.watch('app/img/*', ['imagemin']);
	gulp.watch('app/js/**/*.js', browserSync.reload);
});



config                  = {
	shape               : {
        dimension       : {         // Set maximum dimensions
        	maxWidth    : 32,
        	maxHeight   : 32
        },
        spacing         : {         // Add padding
        	padding     : 10
        },
        dest            : 'out'    // Keep the intermediate files
      },
      mode                : {
        view            : {         // Activate the «view» mode
        	bust        : false,
        	render      : {
                scss    : true      // Activate Sass output (with default options)
              }
            },
        symbol          : true      // Activate the «symbol» mode
      }
    };