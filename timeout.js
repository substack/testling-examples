var test = require('testling');

test('setTimeout', function (t) {
    t.plan(1);
    setTimeout(function () {
        t.ok(true);
        t.end();
    }, 100);
});
