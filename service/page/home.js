const fetch = require('node-fetch');


module.exports = class control extends BaseControl {
    constructor() {
        super();
    }
    *home(req) {
        yield self.end(200, 'homepage');
    }
}