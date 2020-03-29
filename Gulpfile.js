const gulp = require("gulp");
const sass = require("gulp-sass");
const cssnano = require('gulp-cssnano');
const responsive = require('gulp-responsive');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('css', function() {
  return gulp.src('./assets/scss/main.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cssnano())
    .on('error', sass.logError)
    .pipe(gulp.dest('./_includes/css'));
});

gulp.task('images', function () {
  return gulp.src('uploads/**/*.{png,jpg}')
    .pipe(responsive({
      '**/*': [{
        width: 500,
        rename: { suffix: '-500px' },
      },{
        width: 800,
        rename: { suffix: '-800px' },
      },{
        width: 1200,
        rename: { suffix: '-1200px' },
      },{
        width: 1500,
        rename: { suffix: '-default' },
      },{
        width: 2000,
        rename: { suffix: '-2000px' },
      },{
        width: 2500,
        rename: { suffix: '-2500px' },
      },{
        height: 500,
        width: 500,
        rename: { suffix: '-cover-500px' },
      },{
        height: 800,
        width: 800,
        rename: { suffix: '-cover-800px' },
      },{
        height: 1200,
        width: 1200,
        rename: { suffix: '-cover-1200px' },
      },{
        height: 1000,
        width: 1000,
        rename: { suffix: '-cover' },
      }]
    },{
      quality: 80,
      progressive: true,
      withMetadata: false,
      withoutEnlargement: true,
      errorOnUnusedImage: false,
      errorOnEnlargement: false
    }))
    .pipe(gulp.dest('photos'))
})

gulp.task("watch", function() {
  gulp.watch('./assets/scss/**/*.scss', gulp.parallel('css'));
  gulp.watch('./uploads/**/*.{png,jpg}', gulp.parallel('images'));
});

gulp.task('dev', gulp.parallel('css'));
gulp.task('build', gulp.parallel('css', 'images'));
