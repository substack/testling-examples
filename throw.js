var test = require('testling');

test('throw', function (t) {
    throw 'beep';
    t.end();
});
