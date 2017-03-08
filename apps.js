

let Reader = require('./app-reader.js');
global.readers = new Reader();

let Writer = require('./app-writer.js');
global.writers = new Writer();

// let writer = require('./app-writer.js')();