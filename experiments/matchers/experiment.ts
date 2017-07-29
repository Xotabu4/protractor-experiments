/// <reference types="jasmine-protractor-matchers" />

import {browser, element, by, $, $$, protractor} from 'protractor'
let customMatchers = require('jasmine-protractor-matchers')

describe('Matchers tests', function () {
    beforeEach(function () {
        jasmine.addMatchers(customMatchers);
    });

    it('creating custom jasmine matcher function with wait', function () {
        browser.get('')
        expect($('body')).toAppear()
        expect($('nonexist')).not.toAppear()


        expect($('body')).not.toDisappear()
        expect($('nonexist')).toDisappear()

        expect($('nonexist')).not.toDisappear('wetsdfsaf')

        expect($('#checkboxes input')).toHaveClass('ng-valid')
        expect($('html')).not.toHaveClass('ng-scope', 100, 'HELLO WORLD!')
    });

    it('creating custom jasmine matcher function with wait - negative case', function () {
        browser.get('/')
        
        expect(expect($('nonexist')).toAppear).toThrowError()
        expect(expect($('body')).not.toAppear).toThrowError()

        expect(expect($('body')).toDisappear).toThrowError() 
        expect(expect($('nonexist')).not.toDisappear).toThrowError()       
    });
})
