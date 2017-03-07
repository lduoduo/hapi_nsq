'use strict';

const Hapi = require('hapi');

const config = require('./config');
const routes = require('./router/route.js');

//create a server with a host and port
const server = new Hapi.Server();


server.connection({
    //外显的域或者ip
    //host: '10.101.40.14',
    //服务器监听的域或者ip地址
    //address: '10.101.40.14',
    port: config.port.reader
});

//add route
server.route(
    {
        method: '*',
        path: '/111',
        handler: function (req, res) {
            return res('hello 111');
        }
    }
);

//start the server
module.exports = function Reader() {
    server.start((err) => {
        if (err) {
            throw err;
        }
        console.log('reader running at ', server.info.uri);
    });
}
