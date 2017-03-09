/** 可配置的API路由列表 */
var config = require('../config');

//url地址前缀
var urlPath = config.rootPath + "/api/";
//control的相对路径
var apiPath = "../service/api";

var list = [
    {
        method: 'post',
        path: urlPath + "post",
        controlname: "post",
        desc: "推送消息"
    },
    {
        method: 'post',
        path: urlPath + "get",
        controlname: "get",
        desc: "获取消息"
    },
    {
        method: 'get',
        path: urlPath + "getmsg",
        controlname: "getmsg",
        desc: "测试get"
    }
];

module.exports = {
    apiPath: apiPath,
    list: list
}