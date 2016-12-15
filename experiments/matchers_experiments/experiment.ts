

xdescribe('Matchers tests', function () {
    beforeEach(function () {
        var customMatchers = require('jasmine-protractor-matchers');
        jasmine.addMatchers(customMatchers);
    });

    it('creating custom jasmine matcher function with wait', function () {
        browser.get('/');
        (expect($('body')) as any).toAppear();
        (expect($('bodasdy')) as any).toDisappear();
    });
})