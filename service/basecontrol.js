var config = require('../config');

module.exports = global.BaseControl = class BaseControl {
    constructor() { }
    _init(req, res) {
        this.nsqurl = config.nsqurl;
        req.controller = this;
        this.request = req;
        this.response = res;
    }
    /** 输出
     * option:{
     *  code: http返回码
     *  url: 如果有跳转, 跳转的url
     * }
     * obj: {
     *  data: 返回内容
     *  statuscode: 返回状态
     * }
     */
    *end(option, obj) {
        let code = option.constructor == String ? option : (option.code || 200);
        code = code - 0;
        let url = option.constructor == String ? "" : (option.url || config["404"]);

        switch (code) {
            case 200:
                this.response(200);
                break;
            case 301:
            case 302:
            case 404:
                this.response.redirect(url).code(code);
                break;
            default:
                console.log('code:'+code);
                this.response.redirect(url).code(201);
        }
    }
}