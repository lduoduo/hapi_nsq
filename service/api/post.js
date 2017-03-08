'use stric';
const fetch = require('node-fetch');

module.exports = class control extends BaseControl {
    constructor() {
        super();
    }
    *post(req, res) {

        let self = this;
        let para = req.payload;
        var data = yield fetch(self.nsqurl + "?topic=test",{
            method: 'POST',
            body: JSON.stringify(para),
            headers: { 'Content-Type': 'application/json' }
        });
        data = yield data.text();
        res(data == "OK" ? "提交成功" : "提交失败，请稍后再试").type('text/html');

        //yield promise/generator/thunk

        //Promise写法
        // fetch(self.nsqurl + "?topic=test", {
        //     method: 'POST',
        //     body: JSON.stringify(para),
        //     headers: { 'Content-Type': 'application/json' }
        // })
        //     .then(data =>data.text())
        //     .then(data =>
        //     {
        //         console.log(data);
        //         res(data).type('text/html');
        //     });
        
    }
}