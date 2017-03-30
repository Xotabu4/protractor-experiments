import {browser, $, by, element} from 'protractor'

describe('async/await', ()=> {

    it('testing rejected promises', function () {
        browser.get('')
        expect($('body').getText()).toContain('Forms using different types of input');
    })
})