var test = require('testling');

test('proxy check', function (t) {
    t.createWindow('http://substack.net', function (win) {
        t.equal(win.document.title, 'The Universe of Discord');
        win.location.href = 'http://google.com';
        setTimeout(function () {
            t.equal(win.document.title, 'Google');
            t.end();
        }, 1000);
    });
});
