const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
$.webpack = require('webpack-stream');
const bs = require('browser-sync').create();

const entry = ['./src/client.tsx'];

gulp.task('default', ['start']);
gulp.task('start', ['watch'], () => {
  bs.init({
    server: {
      baseDir: ['.tmp', 'public']
    }
  });
});

gulp.task('watch', ['webpack:watch']);

gulp.task('webpack', () => {
  return gulp.src(entry)
    .pipe($.webpack(require('./webpack.config')))
    .pipe(gulp.dest('.tmp'));
});

gulp.task('webpack:watch', () => {
  gulp.src(entry)
    .pipe($.webpack(Object.assign(
      { watch: true },
      require('./webpack.config')
    )))
    .pipe(gulp.dest('.tmp'));
});
