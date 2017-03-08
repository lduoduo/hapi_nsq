

let Reader = require('./app-reader.js');
global.readers = new Reader();

let writer = require('./app-writer.js')();