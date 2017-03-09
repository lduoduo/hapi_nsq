/** dev环境配置 */

module.exports = class Config {
    constructor(ip) {

        /*当前站点环境*/
        this.env = 'dev';
        /** local ip */
        this.ip = ip;

        /*路由虚拟目录*/
        this.rootPath = '/nsq';

        //对外暴露输入输出的统一接口
        this.port = {
            "writer": 10001,
            "reader": 10002
        };

        //对内配置的nsq地址和接口
        this.nsqurl = "http://10.14.86.134:4151/put";

        //404跳转
        this["404"] = "//ldodo.cc";

    }
}

