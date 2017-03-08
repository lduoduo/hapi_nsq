'use strict';

const Hapi = require('hapi');

const config = require('./config');
const Route = require('./router');

module.exports = class Reader extends Hapi.Server {

    constructor(...args) {

        super();
        let self = this;
        self.register([{
            //启动服务时进行健康检查
            register: require('h2o2')
        }], (err) => {
            self.init.apply(self, args);
            self.start((err) => {
                if (err) {
                    console.log(err);
                }
                console.log('reader running at ', self.info.uri);
            });
        });
        
    }
    /** 初始化的一些操作和注册 */
    init(arg) {
        let self = this;
        console.log(arg);
        self.connection({
            //外显的域或者ip
            //host: '10.101.40.14',
            //服务器监听的域或者ip地址
            //address: '10.101.40.14',
            port: config.port.reader,
            router: {
                stripTrailingSlash: true,
                isCaseSensitive: false
            }
        });

        new Route(self);
    }

}
