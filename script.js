"use strict";

describe('Protractor Experiments', function () {
    beforeEach(function () {
        var customMatchers = require('./src/customMatchers.js');
        jasmine.addMatchers(customMatchers);
    });

    xit('creating custom jasmine matcher function with wait', function () {
        browser.get('http://www.protractortest.org/testapp/ng1/#/form');
        
        let nonexist = $('nonexist');
        let exist = $('body');
        //expect(nonexist).toDisappear();
        //expect(exist).toDisappear();
        //Works if wrap element to promise.
        //expect(protractor.promise.fulfilled(nonexist)).toAppear();
        //expect(protractor.promise.fulfilled(nonexist)).toAppear(1000, 'test message');
        //expect(protractor.promise.fulfilled(exist)).toAppear();
    });
    it('creating custom jasmine matcher function with wait', function () {
        browser.get('http://www.protractortest.org/testapp/ng1/#/form');
        expect($('body')).toAppear();
        expect(expect($('nonexist')).toAppear()).toThrow();
    });

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
        var firstB = browser;
        var secondB = browser.forkNewDriverInstance();
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

    it('extending base ElementFinder', function () {
        browser.get('http://www.protractortest.org/testapp/ng1/#/form');

        // so here we are finding element by css selector

        let CheckBox = require('./src/checkboxElement.js');
        let checkboxwrapped = new CheckBox(by.css('#checkboxes input[ng-model="show"]'));

        checkboxwrapped.check().then(function () {
            expect($('#checkboxes input[ng-model="show"]').isSelected()).toBe(false);
        });
    });
});
