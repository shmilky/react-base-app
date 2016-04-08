"use strict";

var gulp = require('gulp');
//var connect = require('gulp-connect'); //Runs a local dev server
var LiveServer = require('gulp-live-server'); //Runs a local dev server
var open = require('gulp-open'); //Open a URL in a web browser
var browserify = require('browserify'); // Bundles JS
var reactify = require('reactify');  // Transforms React JSX to JS
var source = require('vinyl-source-stream'); // Use conventional text streams with Gulp
var concat = require('gulp-concat'); //Concatenates files
var lint = require('gulp-eslint'); //Lint JS files, including JSX

var config = {
    port: 7777,
    devBaseUrl: 'http://localhost',
    paths: {
        html: './frontend/tmp/*.html',
        js: './frontend/tmp/**/*.js',
        css: [
            'frontend/style/street.css',
            'bower_components/bootstrap/dist/css/bootstrap.min.css',
            'bower_components/bootstrap/dist/css/bootstrap-theme.min.css'
        ],
        dist: './public/.compiled',
        mainJs: './frontend/backOffice.jsx'
    }
};

//Start a local development server
gulp.task('connect', function() {
    var server = new LiveServer('./server/serverMain');
    server.start();
});

gulp.task('open', ['connect'], function() {
    gulp.src('')
        .pipe(open({ uri: config.devBaseUrl + ':' + config.port + '/'}));
});

gulp.task('html', function() {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist));
        //.pipe(connect.reload());
});

gulp.task('js', function() {
    browserify(config.paths.mainJs)
        .transform(reactify)
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(source('app.js'))
        .pipe(gulp.dest(config.paths.dist + '/js'));
        //.pipe(connect.reload());
});

gulp.task('css', function() {
    gulp.src(config.paths.css)
        .pipe(concat('style.css'))
        .pipe(gulp.dest(config.paths.dist + '/css'));
});

gulp.task('lint', function() {
    return gulp.src(config.paths.js)
        .pipe(lint({config: 'eslint.config.json'}))
        .pipe(lint.format());
});

gulp.task('watch', function() {
    gulp.watch(config.paths.html, ['html']);
    gulp.watch(config.paths.js, ['js', 'lint']);
});

gulp.task('default', ['html', 'js', 'css', 'lint', 'open', 'watch']);
