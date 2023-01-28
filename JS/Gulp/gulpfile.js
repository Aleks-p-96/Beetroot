const gulp = require('gulp');
const argv = require('yargs').argv;
const projectConfig = require('./projectConfig.json');
const path = projectConfig.path;
const browserSync = require('browser-sync').create();
const nunjucks = require('gulp-nunjucks');

const sass = require('gulp-sass')(require('sass')); 
const sourcemaps = require('gulp-sourcemaps');
const gulpif = require('gulp-if');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const rename = require("gulp-rename");
const gcmq = require('gulp-group-css-media-queries');

/**
 * Dev check
 */
const isDev = function(){
    return !argv.prod;
}

/**
 * Prod check
 */
const isProd = function(){
    return !!argv.prod;
}

console.log(path);

path.src.html[0] =  path.src.srcPath + path.src.html[0];
path.src.html[1] =  "!" + path.src.html[0].slice(0, -6) + "_*.html";
path.src.html[2] =  "!" + path.src.srcPath + "/assets";
path.src.html[3] =  "!" + path.src.srcPath + "/_html";

path.dist.html = path.dist.distPath + path.dist.html;


function njk() {
    return gulp.src(path.src.html)
        .pipe(nunjucks.compile())
        .pipe(gulp.dest(path.dist.html))
        .on('end', browserSync.reload);
}
exports.njk = njk;

path.watch = {};
path.watch.html = [];
path.watch.html[0] = path.src.html[0];

path.src.style[0] = path.src.srcPath + path.src.style[0];

path.dist.style = path.dist.distPath + path.dist.style;

path.watch.style = [];
path.watch.style[0]  = path.src.style[0].replace( path.src.style[0].split('/').pop(), '**/*.scss' );


function watch(){
    gulp.watch(path.watch.html, njk);
    gulp.watch(path.watch.style, scss);
}

function browsersync() {
    browserSync.init({
            open: true,
            server: path.dist.distPath
    });
}

function scss(){
    return gulp.src(path.src.style)
        .pipe(gulpif(isDev(), sourcemaps.init()))
        .pipe(sass())
        .pipe(gulpif(isProd(), autoprefixer({
            grid: true
        })))
        .pipe(gulpif(isProd(), gcmq()))
        .pipe(gulpif(isDev(), sourcemaps.write()))
        .pipe(gulpif(isProd(), gulp.dest(path.dist.style)))
        .pipe(gulpif(isProd(), csso()))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(path.dist.style))
        .pipe(browserSync.reload({stream: true}))
}


exports.default = gulp.series(
    gulp.parallel(njk, scss),
    gulp.parallel(browsersync, watch)
);



































// function testTask(done){
//     console.log('my test message');
//     done();
// }

// function testTAskSecond(done){
//     console.log('my test message 222');
//     done();
// }

// exports.test = testTask;
// exports.testSecond = testTAskSecond;