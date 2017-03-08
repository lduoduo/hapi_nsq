/** 可配置的API路由列表 */
var config = require('../config');

//url地址前缀
var urlPath = config.rootPath + "/";
//control的相对路径
var apiPath = "../service/page";

//url地址前缀
var urlPath = config.rootPath;
//control的相对路径
var apiPath = "../service/api";

var list = [
    {
        path: urlPath,
        controlname: "home",
        desc: "首页"
    }
];

module.exports = {
    apiPath: apiPath,
    list: list
}