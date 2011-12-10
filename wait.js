var test = require('testling');

test('waiting...', function (t) {
    var ix = 0;
    var iv = setInterval(function () {
        ix += 5;
        t.log(ix)
        if (ix >= 20) {
            clearInterval(iv);
            t.end();
        }
    }, 5 * 1000);
});
