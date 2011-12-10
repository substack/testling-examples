var test = require('testling');

test('keys', function (t) {
    t.plan(1);
    setTimeout(function () {
        t.deepEqual(
            Object.keys({ a : 1, b : 2 }),
            [ 'a','b' ]
        );
        t.end();
    }, 500);
});

test('json', function (t) {
    t.plan(2);
    t.deepEqual(JSON.parse('[1,2]'), [1,2]);
    t.equal(JSON.stringify({a:3,b:4}), '{"a":3,"b":4}');
    t.end();
});
