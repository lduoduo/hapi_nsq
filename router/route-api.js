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
        controlname: "post.js",
        desc: "推送消息"
    },
    {
        path: urlPath + "get",
        controlname: "get.js",
        desc: "获取消息"
    }
];

module.exports = {
    apiPath: apiPath,
    list: list
}