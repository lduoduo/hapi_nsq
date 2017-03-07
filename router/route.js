/** 可配置的路由列表 */
var rootpath = "../service/";

module.exports = [
    {
        controller: "detail.index",
        address: "/dujia/wanle/{productid}.html",
        desc: "cn玩乐终页",
        example: ["/dujia/wanle/12430.html"]
    },
    {
        controller: "menpiaohome.index",
        address: "/globalscenery",
        desc: "门票首页",
        example: ["/globalscenery"]
    },
    {
        controller: "wanlehome.index",
        address: "/dujia/wanle",
        desc: "玩乐首页",
        example: ["/dujia/wanle"]
    },
    {
        controller: "list.ticket",
        address: "/dujia/wanle/{cityName}-menpiao",
        desc: "门票标签页",
        example: ["/dujia/wanle/xianggang-menpiao"]
    },
    {
        controller: "list.wanle",
        address: "/dujia/wanle/{cityName}-dangdi",
        desc: "玩乐标签页",
        example: ["/dujia/wanle/xianggang-dangdi"]
    },
    {
        controller: "list.wifi",
        address: "/dujia/wanle/{cityName}-tongxun",
        desc: "wifi标签页",
        example: ["/dujia/wanle/xianggang-tongxun"]
    },
    {
        controller: "list.search",
        address: "/dujia/wanle/searchlist_{sparam}.html",
        desc: "cn站玩乐搜索页",
        example: ["/dujia/wanle/searchlist_香港迪士尼.html"]
    },
    {
        address: "/dujia/wanle/car",
        controller: "car.index",
        desc: "惠租车",
        example: ["/dujia/wanle/car/"]
    },
    {
        controller: "wifihome.index",
        address: "/dujia/wifi",
        desc: "全球wifi首页",
        example: ["/dujia/wifi"]
    },
    {
        controller: "note.index",
        address: "/dujia/wanle/notes/{productId}.html",
        desc: "特色体验外显",
        example: ["/dujia/wanle/notes/13661.html"]
    },
    {
        controller: "book.book",
        address: "/wanle/bookwanle.html",
        desc: "玩乐预订页",
        example: ["/wanle/bookwanle.html"]
    }
];
