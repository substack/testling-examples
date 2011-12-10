var test = require('testling');
var json = typeof JSON === 'object' ? JSON : require('jsonify');
var path = require('path');

test('xhr', function (t) {
    t.log(process.argv);
    var href = process.argv[2];
    if (!href) t.fail('Usage: ?argv=[webform url]');
    
    t.createWindow(href, function (win, $) {
        setTimeout(function () {
            t.equal($('#res').text(), 'welcome!');
            t.end();
        }, 500);
    });
});
