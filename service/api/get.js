const fetch = require('node-fetch');


module.exports = class control extends BaseControl {
    constructor() {
        super();
    }
    *get(req) {
        let self = this;
        let para = req.params;
        fetch(self.nsqurl, {
            method: 'POST',
            body: JSON.stringify(para),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => {
                console.log(res.ok);
                console.log(res.status);
                console.log(res.statusText);
                console.log(res.headers.raw());
                console.log(res.headers.get('content-type'));
                yield self.end(200, 'ok');
            });
    }
}