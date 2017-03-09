const fetch = require('node-fetch');

module.exports = class control extends BaseControl {
    constructor() {
        super();
    }
    *home(req) {
        var html = '<script src="http://js.40017.cn/cn/csl/guoneiyou/lib/jquery.min.js">homepage</script>'+
        '<script src="http://www.ly.com/udc/static/js/app.js">homepage1</script>';
        yield this.end(200, html);
    }
}