var gulp = require('gulp');
var jest = require('jest-cli');

var jestConfig = {
    rootDir: 'source'
};

gulp.task('test', function(done) {
    jest.runCLI({ config : jestConfig }, ".", function() {
        done();
    });
});

gulp.task('tdd', function(done) {
    gulp.watch([ jestConfig.rootDir + "/**/*.js" ], [ 'test' ]);
});

gulp.task('default', function() {
    // place code for your default task here
});