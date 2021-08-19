const { src, dest, parallel } = require('gulp');
const gulp = require('gulp');
const data = require('gulp-data'),
fs = require('fs');
const plugins = require('gulp-load-plugins')()

function pug() {
  return src( ["./src/pug/*"]).pipe(plugins.watch('./src/pug/*.pug')).pipe(data(function(file) {
    return JSON.parse(fs.readFileSync('./partial-json/src-data.json'))})).pipe(plugins.pug()).pipe(dest('./src/'))
  }


function pug_dist() {
    return src( ["./src/pug/*"]).pipe(plugins.watch('./src/pug/*.pug')).pipe(data(function(file) {
      return JSON.parse(fs.readFileSync('./partial-json/dist-data.json'))})).pipe(plugins.pug()).pipe(plugins.htmlclean()).pipe(dest('./dist/'))
 }
  
function sass() {
  return src( ["./src/scss/*"]).pipe(plugins.watch('./src/scss/*.scss')).pipe(plugins.sass()).pipe(dest('./src/css')).pipe(plugins.gzip()).pipe(gulp.dest('./dist/css/'));
}

function css() {
  return src("./src/css/*").pipe(plugins.concat('bundle.css'))
  .pipe((plugins.cleanCss())).pipe(plugins.purgecss({ content: ["./src/index.html"],safelist:['showBackToTop'] })).pipe(dest('./dist/css/')).pipe(plugins.gzip()).pipe(gulp.dest("./dist/css/"));
}


function js(){ 
return src('./src/js/*.js').pipe(plugins.concat('bundle.js')).pipe(plugins.babel({
    presets: ['@babel/env']})).pipe(plugins.uglify()).pipe(gulp.dest('./dist/js/')).pipe(plugins.gzip()).pipe(gulp.dest('./dist/js/'))
  } 


function img(){
  return src('./src/img/*').pipe(plugins.imagemin([plugins.imagemin.mozjpeg({quality: 40, progressive: true})],
  )).pipe(gulp.dest('./dist/img/')).pipe(plugins.webp()).pipe(gulp.dest('./dist/img/'));
  }
  
function deploy(){
  return src("./dist/**/*").pipe(plugins.ghPages())

}
exports.img=img;

exports.js=js;
exports.deploy=deploy;
exports.js=js;
exports.pug_dist=pug_dist;
exports.pug=pug;
exports.pug_dist=pug_dist;

exports.dev=parallel(pug,sass)
exports.dist=parallel(pug_dist,sass,css,js,img)

