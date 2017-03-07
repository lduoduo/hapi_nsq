'use strict';

const Hapi = require('hapi');

const config = require('./config');

//create a server with a host and port
const server = new Hapi.Server();


server.connection({
    //外显的域或者ip
    //host: '10.101.40.14',
    //服务器监听的域或者ip地址
    //address: '10.101.40.14',
    port: config.port.writer,
    router: {
        stripTrailingSlash: true,
        isCaseSensitive: false
    }
});

//add route
server.route([
    {
        method: 'get',
        path: '/111',
        handler: function (req, res) {
            return res('hello 111');
        }
    }, {
        method: 'get',
        path: '/222',
        handler: function (req, res) {
            return res('hello 222');
        }
    }]);

//start the server
module.exports = function Writer() {
    server.start((err) => {
        if (err) {
            throw err;
        }
        console.log('server running at ', server.info.uri);
    });
}