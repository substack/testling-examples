var test = require('testling');

test('google live search', function (t) {
    t.createWindow('http://google.com', function (win, $) {
        $('lst-ib').val('beep boop');
        $('tsf').submit();
        
        setTimeout(function () {
            t.equal(win.document.title, 'beep boop - Google Search');
            t.end();
        }, 4000);
    });
});
