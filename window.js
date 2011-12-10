var test = require('testling');

test('moo', function (t) {
    t.log(window.navigator.appName);
    
    t.createWindow('http://substack.net', function (win) {
        t.equal(win.document.title, 'The Universe of Discord');
        t.end();
    });
});

test('foo', function (t) {
    t.equal(2, 2);
    t.end();
});
