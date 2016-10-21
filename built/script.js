"use strict";
const protractor_1 = require('protractor');
xdescribe('Protractor Experiments', function () {
    beforeEach(function () {
        var customMatchers = require('jasmine-protractor-matchers');
        jasmine.addMatchers(customMatchers);
    });
    it('creating custom jasmine matcher function with wait', function () {
        protractor_1.browser.get('http://www.protractortest.org/testapp/ng1/#/form');
        expect(protractor_1.$('body')).toAppear();
        expect(protractor_1.$('bodasdy')).toDisappear();
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
        };
        var firstB = protractor_1.browser;
        var secondB = protractor_1.browser.forkNewDriverInstance();
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
        protractor_1.browser.get('http://www.protractortest.org/testapp/ng1/#/form');
        // so here we are finding element by css selector
        let CheckBox = require('./src/checkboxElement.js');
        let checkboxwrapped = new CheckBox(protractor_1.by.css('#checkboxes input[ng-model="show"]'));
        checkboxwrapped.check().then(function () {
            expect(protractor_1.$('#checkboxes input[ng-model="show"]').isSelected()).toBe(false);
        });
    });
});
//# sourceMappingURL=script.js.map