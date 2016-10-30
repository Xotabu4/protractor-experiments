/**
 * Created by xotab on 28.07.2016.
 */

import {browser, $, by} from 'protractor'
import {CheckBox} from '../src/checkboxElement'
declare var describe, it:any

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

xdescribe('PageObjects!', function () {

    it('testing different pageobjects for different browsers', function () {
        var getPage = function (page) {
            if (this.first) {
                let firstPage = page.firstVersion;
                return new firstPage();
            }
            if (this.second) {
                let secondPage = page.secondVersion;
                return new secondPage();
            }
        }
        var firstB:any = browser;
        var secondB:any = browser.forkNewDriverInstance();
        firstB.first = true;
        secondB.first = false;
        firstB.second = false;
        secondB.second = true;

        firstB.getPage = getPage;
        secondB.getPage = getPage;
        var Page = require('./src/pages.js');
        let numberone = firstB.getPage(Page).doAction();

        let numbertwo = secondB.getPage(Page).doAction();
        expect(numberone).toBe(1);
        expect(numbertwo).toBe(2);

    });
});

xdescribe('Extending WebElements!', function () {
    it('extending base ElementFinder', function () {
        browser.get('/');

        // so here we are finding element by css selector

        let CheckBox = require('./src/checkboxElement.js');
        let checkboxwrapped = new CheckBox(by.css('#checkboxes input[ng-model="show"]'));
        checkboxwrapped.check().then(function () {
            expect($('#checkboxes input[ng-model="show"]').isSelected()).toBe(false);
        });
    });

    it('Checkbox', async function () {
        browser.get('/')
        let checkbox = new CheckBox($('LOCATOR HERE!'))
        checkbox.check()
        
    }); 
})

describe('ASYNC/AWAIT', function () {

    it('', async function () {
        browser.get('/')
        let attributeClass = await $('body').getAttribute('class')
        console.log('ATTRIBUTE CLASS', attributeClass == 'ng-scope')
    })
})