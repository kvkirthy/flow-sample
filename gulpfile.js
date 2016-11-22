var gulp = require('gulp'),
    gutil = require('gulp-util'),
    watch = require('gulp-watch'),
    eslint = require('gulp-eslint');

gulp.task('lint-local', () => {
    return watch(['app/**/*.js', 'app/**/*.jsx', '!node_modules/**'], function () {
        gulp.src(['app/**/*.js', 'app/**/*.jsx', '!node_modules/**'])
            .pipe(eslint())
            .pipe(eslint.format())
            .pipe(eslint.result(result => {
                // Called for each ESLint result.
                gutil.log(gutil.colors.magenta(`ESLint result: ${result.filePath}`));
                gutil.log(gutil.colors.green(`# Messages: ${result.messages.length}`));
                gutil.log(gutil.colors.yellow(`# Warnings: ${result.warningCount}`));
                gutil.log(gutil.colors.red(`# Errors: ${result.errorCount}`));
            }));
    });

});

gulp.task('lint-dev', () => {
    return gulp.src(['app/**/*.js', 'app/**/*.jsx', '!node_modules/**'])
        .pipe(eslint())
        .pipe(eslint.result(result => {
            // Called for each ESLint result.
            gutil.log(gutil.colors.magenta(`ESLint result: ${result.filePath}`));
            gutil.log(gutil.colors.green(`# Messages: ${result.messages.length}`));
            gutil.log(gutil.colors.yellow(`# Warnings: ${result.warningCount}`));
            gutil.log(gutil.colors.red(`# Errors: ${result.errorCount}`));
        }));
});

gulp.task('local', ['lint-local'], function () {
    return gutil.log('Welcome to gulp tasks');
});

gulp.task('dev', ['lint-dev'], function () {
    return gutil.log('Welcome to gulp tasks');
});
