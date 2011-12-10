var test = require('testling');

test('click a link', function (t) {
    t.createWindow('http://substack.net', function (win, $) {
        t.equal(win.document.title, 'The Universe of Discord');
        $('a[href="/about"]').click();
        
        t.log(win.location.href);
        setTimeout(function () {
            t.log(win.location.href);
            t.equal(
                win.document.title,
                'About Me! :: The Universe of Discord'
            );
            t.end();
        }, 3000);
    });
});
