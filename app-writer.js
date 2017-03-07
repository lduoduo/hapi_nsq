'use strict';

const Hapi = require('hapi');

//create a server with a host and port
const server = new Hapi.Server();
server.connection({
    //外显的域或者ip
    //host: '10.101.40.14',
    //服务器监听的域或者ip地址
    //address: '10.101.40.14',
    port: 10001
});

//add route
server.route({
    method: 'get',
    path: '/hello',
    handler: function(req, res){
        return res('hello dodo');
    }
});

//start the server
server.start((err)=>{
    if(err){
        throw err;
    }
    console.log('server running at ', server.info.uri);
});