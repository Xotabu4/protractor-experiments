import matchers = require('jasmine-protractor-matchers')
import { browser, element, by, $, $$, protractor } from 'protractor'

describe('Matchers tests', function () {
    beforeEach(function () {
        jasmine.addMatchers(matchers);
        browser.get('')
    });

    it('creating custom jasmine matcher function with wait', function () {

        expect($('body')).toAppear()
        expect($('body')).not.toDisappear()
        expect($('nonexist')).toDisappear()
        expect($('nonexist')).not.toAppear()
        expect($('#animals')).toHaveClass('ng-scope')
        expect($('#animals')).not.toHaveClass('TEST')
    });

    it('creating custom jasmine matcher function with wait - negative case', function () {

        // expect(expect($('nonexist')).toAppear).toThrowError()
        // expect(expect($('nonexist')).not.toDisappear).toThrowError()

        // expect(expect($('body')).toDisappear).toThrowError()
        // expect(expect($('body')).not.toAppear).toThrowError()

        //expect($('#animals')).toHaveClass('TEST', 10)
        expect($('#animals')).not.toHaveClass('ng-scope', 10000)
        
        //expect($('#animals')).toHaveClass('TEST', 10)
        //expect($('#animals')).not.toHaveClass('ng-scope', 10)
    });
})
