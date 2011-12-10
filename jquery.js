var test = require('testling');

test('check the title', function (t) {
    t.createWindow('http://substack.net', function (win, $) {
        t.equal($('title').text(), 'The Universe of Discord');
        t.end();
    });
});
