'use strict';
var para = process.argv[2];
var exec = require('child_process').exec;

/************************ exec ***************************** */
// var ls = exec('node -v', function(err, stdout, stderr){
//     if(err){
//         console.log(err);
//         console.log('err code:' + err.code);
//     }
//     console.log('child process stdout:'+stdout);
// });

// var test = exec('mkdir '+para, function(err, stdout, stderr){
//     console.log(err);
//     console.log(stdout);
//     console.log(stderr);
// });

// var test = exec('echo hello  '+para, function(err, stdout, stderr){
//     console.log(err);
//     console.log(stdout);
//     console.log(stderr);
// });

var test = exec('node sh/a.js', function(err, stdout, stderr){
    console.log(err);
    console.log(stdout);
    console.log(stderr);
});


/*************************exec 第二种写法******************************* */
// var child = exec('node -v');

// child.stdout.on('data', function (data) {
//     console.log('stdout:' + data);
// });
// child.stderr.on('data', function (data) {
//     console.log('stderr:' + data);
// });
// child.on('close', function (code) {
//     console.log('closing code:' + code);
// });

/************************ execSync ***************************** */

// var execSync = require('child_process').execSync;

// var SEPARATOR = process.platform === 'win32' ? ';' :':';

// var env = Object.assign({}, process.env);

// env.PATH = path.resolve('./node_modules/.bin') + SEPARATOR + env.PATH;

// function myExecSync(cmd){

//     var output = execSync(cmd, {
//         cwd: process.cwd(),
//         env: env
//     });

//     console.log(output);

// }

// myExecSync('eslint .');


/********************************execFile**************************** */

// var child = require('child_process');
// var path = "../";
// child.execFile('node apps.js',['-l', path], function(err, result){
//     console.log(result);
// });

/*******************************spawn******************************* */

// var child = require('child_process');

// var path = ".";

// var ls = child.spawn('test.sh',['-1', path]);

// ls.stdout.on

/*******************************fork******************************* */
// var child_process = require('child_process');
// var n = child_process.fork('./test.sh');

// n.on('message', function(m){
//     console.log('parent got message:'+m);
// });

// n.send({hello:'world'});

/******************************************************************* */
