'use strict';
const os = require("os");


module.exports = {
    env: 'dev',
    ip: getLocalIP()
}

function getLocalIP() {
    let interObj = os.networkInterfaces();
    let address;
    for (let i in interObj) {
        let itemArr = interObj[i];
        if (itemArr) {
            itemArr.forEach(function (item) {
                if (item.family === 'IPv4' && item.address !== "127.0.0.1") {
                    address = item.address;
                    return;
                }
            })
        }
        if (address) return address;
    };
}