import gulp from 'gulp';
import sass from 'gulp-sass';
import * as dartSass from 'sass';
import { deleteAsync } from 'del';

const sassCompiler = sass(dartSass);

// Função auxiliar para importação dinâmica
async function loadModule(moduleName) {
    return (await import(moduleName)).default;
}

// Tarefa para compilar SASS
export function compileSass() {
    return gulp.src('src/scss/main.scss')
        .pipe(sassCompiler({outputStyle: 'compressed'}).on('error', sassCompiler.logError))
        .pipe(gulp.dest('dist/css'));
}

// Tarefa para comprimir imagens
export async function compressImages() {
    const imagemin = await loadModule('gulp-imagemin');
    return gulp.src('src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
}

// Tarefa para comprimir JavaScript
export async function minifyJs() {
    const uglify = await loadModule('gulp-uglify');
    return gulp.src('src/js/main.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
}

// Tarefa para limpar a pasta dist
export function clean() {
    return deleteAsync(['dist']);
}

// Tarefa default que executa todas as outras
export default gulp.series(clean, gulp.parallel(compileSass, compressImages, minifyJs));