var test = require('testling');

test('argv test', function (t) {
    t.log(process.argv);
    t.end();
});
