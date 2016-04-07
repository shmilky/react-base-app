var browserSync = require('browser-sync');
var gulp = require('gulp');
var LiveServer = require('gulp-live-server');
var source = require('vinyl-source-stream');
//var babelify = require('babelify');
var browserify = require('browserify');
var reactify = require('reactify');

gulp.task('live-server',function(){
    var server = new LiveServer('./server/serverMain');
    server.start();
});

gulp.task('bundleStreet', ['copy'], function(){
    return browserify({
        entries:'frontend/streetApp.jsx',
//		entries:'app/components/GroceryListApp.jsx',
        debug:true
    })
    .transform(reactify)
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./public/.compiled/js'));
});

gulp.task('bundleBackOffice', ['copy'], function(){
    return browserify({
        entries:'frontend/backOffice.jsx',
//		entries:'app/components/GroceryListApp.jsx',
        debug:true
    })
    .transform(reactify)
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./public/.compiled/js'));
});

gulp.task('copy',function(){
    gulp.src(['frontend/style/style.css'])
        .pipe(gulp.dest('./public/.compiled/css'));
});

//gulp.task('temp',function(){
//    gulp.src(['app/index.html','app/*.css'])
//        .pipe(gulp.dest('./.tmp'));
//
//    gulp.src(['bower_components/**'])
//        .pipe(gulp.dest('./.tmp/bower_components'));
//});
//
//gulp.task('bundle-n-reload',['bundleStreet'],browserSync.reload)
//
//gulp.task('observe-all',function(){
//    gulp.watch('app/**/*.*',['bundle-n-reload']);
//    gulp.watch('app/*.*',['copy']);
//    gulp.watch('./server/**/*.js',['live-server']);
//});
//
//
//gulp.task('serve', ['live-server','bundleStreet','temp','observe-all'], function() {
gulp.task('serveStreetApp', ['bundleStreet', 'live-server'], function() {
    browserSync.init(null, {
        proxy: "http://localhost:7777",
        port: 9001
    });
});
gulp.task('serveBackOffice', ['bundleBackOffice', 'live-server'], function() {
    browserSync.init(null, {
        proxy: "http://localhost:7777/backoffice",
        port: 9001
    });
});
