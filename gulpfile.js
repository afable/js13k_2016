var gulp = require('gulp');

var zip = require('gulp-zip');
var size = require('gulp-filesize');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var runSequence = require('run-sequence');
const del = require('del');

var zipFile = 'js13k_2016.zip';

var paths = {
    scripts: ['main.js'],
    pngs:['*.png'],
    htmls:['*.html'],
    dist:'./deploy/',
    processed: './deploy/*.*'
};

gulp.task('clean', function () {
    return del(paths.dist);
});

gulp.task('copyResources', function() {
    return gulp.src(paths.pngs)
            .pipe(gulp.dest(paths.dist));
});

gulp.task('minifyHTML', function() {
    return gulp.src(paths.htmls)
         .pipe(htmlmin({collapseWhitespace: true}))
           .pipe(gulp.dest(paths.dist));
});

gulp.task('uglify', function() {
    return gulp.src(paths.scripts)
          .pipe(uglify())
         .pipe(gulp.dest(paths.dist));
});

gulp.task('deploy', function() {
    return gulp.src(paths.processed)
            .pipe(zip(zipFile))
            .pipe(gulp.dest(paths.dist));

});

gulp.task('size', function() {
    return gulp.src(paths.dist+zipFile)
            .pipe(size());
});

gulp.task('default', function() {
    runSequence('clean', ['copyResources','minifyHTML', 'uglify'],'deploy', 'size');
});
