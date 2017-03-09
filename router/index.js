/** 路由控制方法 */
const co = require('co');
const routes = require('./route.js');
require("../service/basecontrol.js");

let server;

module.exports = class Route {
    constructor(servers) {
        server = servers;
        this.init();
    }
    //路由初始化，循环注册
    init() {
        let self = this;
        for (let i in routes) {
            for (let item of routes[i].list) {
                self.route(routes[i].apiPath, item);
            }
        }
    }
    //具体路由注册
    route(apiPath, conf) {
        // console.log(conf);
        server.route({
            method: conf.method || 'get',
            config: {
                description: conf.desc,
                state: {
                    parse: true, // parse and store in request.state
                    failAction: 'ignore' // may also be 'ignore' or 'log'
                }
            },
            path: conf.path,
            handler: function (req, res) {

                console.log(req.url.href);

                co(function* () {
                    let Control = requireControl(apiPath, conf.controlname);
                    let controls = new Control();
                    controls._init(req, res);

                    try {

                        yield controls[conf.controlname](req, res);

                    } catch (e) {

                        console.log(e);
                        res(JSON.parse(e.message)).type('text/json');

                    }

                });

            }
        })
    }
}

function requireControl(paths, filename) {
    return require(paths + '/' + filename);
}