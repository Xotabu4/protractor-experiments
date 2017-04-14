/// <reference types="jasmine-protractor-matchers" />

import {browser, element, by, $, $$, protractor} from 'protractor'

describe('Matchers tests', function () {
    beforeEach(function () {
        let customMatchers = require('jasmine-protractor-matchers');
        jasmine.addMatchers(customMatchers);
    });


    it('creating custom jasmine matcher function with wait', function () {
        browser.get('/')
        expect($('body')).toAppear()
        expect($('nonexist')).toDisappear()
    });

    it('creating custom jasmine matcher function with wait - negative case', function () {
        browser.get('/')
        
        expect(expect($('nonexist')).toAppear).toThrowError()
        expect(expect($('body')).toDisappear).toThrowError()        
    });
})
