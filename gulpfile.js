
var gulp = require("gulp");
var rename = require("gulp-rename");
var sass = require ("gulp-sass");


function style(done) {
    gulp.src('./src/sass/style.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename( 'style.css' ))
    .pipe(gulp.dest('./src/css/'));

done()

}

gulp.task(style);