var gulp = require('gulp'),
    gutil = require('gulp-util'),
    path = require('path'),
    karma = require('karma'),
    karmaParseConfig = require('karma/lib/config').parseConfig;

function runKarma(configFilePath, options, cb) {

    configFilePath = path.resolve(configFilePath);

    var server = karma.server;
    var log=gutil.log, colors=gutil.colors;
    var config = karmaParseConfig(configFilePath, {});

    Object.keys(options).forEach(function(key) {
      config[key] = options[key];
    });

    server.start(config, function(exitCode) {
        log('Karma has exited with ' + colors.red(exitCode));
        cb();
        process.exit(exitCode);
    });
}

var args = process.argv.slice(2),
    task_file = "", task_dir = "";
if(args.indexOf("-f") !== -1){
    task_file = args[args.indexOf("-f")+1];
}
if(args.indexOf("-d") !== -1){
    task_dir = args[args.indexOf("-d")+1];
}

console.log(task_file);
console.log(task_dir);
var karmaFiles = task_file ? [task_file+".js", task_file+"Spec.js"].map(function(e){
        return task_dir ? task_dir+"/"+e : e;})
        : ["*.js"];
console.log(karmaFiles);

/** single run */
gulp.task('test', function(cb) {
    runKarma('karma.conf.js', {
        files: karmaFiles,
        autoWatch: false,
        singleRun: true
    }, cb);
});

/** continuous ... using karma to watch (feel free to circumvent that;) */
gulp.task('tdd', function(cb) {
    runKarma('karma.conf.js', {
        files: karmaFiles,
        autoWatch: true,
        singleRun: false
    }, cb);
});
