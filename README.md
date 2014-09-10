[Gulp](http://gulpjs.com/) tasks to run [Jest](http://facebook.github.io/jest/) unit tests (single run + auto run on change)

## You don't need a Gulp Plugin for Jest

Although there is a [Gulp plugin](https://github.com/Dakuan/gulp-jest) for Jest, you don't really need that. You can simply run Jest CLI from your gulpfile. See my example [gulpfile.js](https://github.com/iaretiga/gulp-jest-watcher/blob/master/gulpfile.js).

## How to configure Jest

To configure Jest, edit `jestConfig` in [gulpfile.js](https://github.com/iaretiga/gulp-jest-watcher/blob/master/gulpfile.js). See here for config options: [Jest Configuration](http://facebook.github.io/jest/docs/api.html#config-options)

## How to run your test suite

Run the corresponding Gulp task from the command line. By default:

`gulp test`

## How to watch your source and test files and run Jest automatically

There is a task for that:

`gulp tdd`

Make sure your task is correctly set up to watch all source __and__ test files.
