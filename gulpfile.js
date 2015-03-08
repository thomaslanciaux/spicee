var _ = require('lodash');
var nib = require('nib');
var gulp = require('gulp');
var stylus = require('gulp-stylus');
var jade = require('gulp-jade');
var browserify = require('gulp-browserify');

function cssBundle(compress) {
  return gulp.src('./src/style/index.styl')
    .pipe(stylus({
      use: nib(),
      compress: compress
    }))
    .pipe(gulp.dest('./dist/css'));
}

gulp.task('js', function() {
  gulp.src('./src/js/index.js')
    .pipe(browserify({
      debug: false,
      insertGlobals: false
    }))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('html', function() {
  gulp.src('./src/tpl/*.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('css', _.partial(cssBundle, false));

gulp.task('cssmin', _.partial(cssBundle, true));

gulp.task('watch-js', function() {
  gulp.watch('./src/js/*.js', ['js']);
});

gulp.task('watch-html', function() {
  gulp.watch('./src/tpl/*.jade', ['html']);
  gulp.watch('./src/tpl/**/*.jade', ['html']);
});

gulp.task('watch-css', function() {
  gulp.watch('./src/style/*.styl', ['css']);
});

gulp.task('watch', ['watch-js', 'watch-html', 'watch-css']);

gulp.task('default', ['html', 'cssmin', 'js']);
