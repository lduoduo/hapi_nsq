/** dev环境配置 */

module.exports = class Config {
    constructor(ip) {

        /*当前站点环境*/
        this.env = 'dev';
        /** local ip */
        this.ip = ip;

        //对外暴露输入输出的统一接口
        this.port = {
            "writer": 10001,
            "reader": 10002
        };

        //对内配置的nsq地址和接口
        this.nsqport = {

        }

    }
}

