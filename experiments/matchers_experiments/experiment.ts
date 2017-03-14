import {browser, element, by, $} from 'protractor'

describe('Matchers tests', function () {
    beforeEach(function () {
        var customMatchers = require('jasmine-protractor-matchers');
        jasmine.addMatchers(customMatchers);
    });

    it('creating custom jasmine matcher function with wait', function () {
        browser.get('/');
        (expect($('body')) as any).toAppear();
        (expect($('nonexist')) as any).toDisappear();
    });

    it('creating custom jasmine matcher function with wait - negative case', function () {
        browser.get('/');
        (expect($('nonexist')) as any).toAppear();
        (expect($('body')) as any).toDisappear();
        //expect((expect($('body')) as any).toDisappear).toThrowError();
        //expect((expect($('nonexist')) as any).toAppear).toThrowError();
    });
})