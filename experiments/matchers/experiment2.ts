
import {browser, element, by, $, $$, protractor} from 'protractor'

describe('Matchers tests: Checking global import', function () {

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
