/** 测试并发脚本 */

function testNSQ(num = 100) {

    var data = {};
    for (let i = 0; i < num; i++) {
        data.name = 'name' + i;
        data.value = "value" + i;

        ajax.post(
            "http://10.101.40.14:10001/nsq/api/post?topic=test",
            data
        );
    }

}