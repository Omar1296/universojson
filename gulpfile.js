//Importar dependencias
const{src, dest, watch, parallel} = require('gulp');

//CSS
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');

//Imagenes
const webp = require('gulp-webp');
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');

//JavaScript
const concat = require('gulp-concat');
const terser = require('gulp-terser');
// const browser = require('gulp-browserify');

const rutas = {
    scss: 'src/scss/**/*.scss',
    js: 'src/js/**/*.js',
    imagenes: 'src/img/**/*'
}

function css(done){
    src(rutas.scss)
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('build/css'));

    done();
}

function js(done){
    src(rutas.js)
    .pipe(sourcemaps.init())
    .pipe(concat('bundle.js'))
    .pipe(terser())
    .pipe(sourcemaps.write('.'))
    .pipe(dest('build/js'));

    done();
}

function formatoWebp(done){
    const opciones = {
        quality: 50
    }

    src(rutas.imagenes)
    .pipe(webp(opciones))
    .pipe(dest('build/img'));

    done();
}

function minImagenes(done){
    const opciones = {
        optimizationLevel: 3
    }

    src(rutas.imagenes)
    .pipe(imagemin(opciones))
    .pipe(dest('build/img'));

    done();

}

function watchArchivos(done){
    watch(rutas.scss, css);
    watch(rutas.js, js);

    done();
}

exports.css = css;
exports.js = js;
exports.watchArchivos = watchArchivos;
exports.comprimirImagenes = parallel(formatoWebp, minImagenes);