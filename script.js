"use strict";
var ElementFinder = require('protractor/lib/element.js').ElementFinder;
var ElementArrayFinder = require('protractor/lib/element.js').ElementArrayFinder;

class CheckBox extends ElementFinder {
    constructor(loc) {
      var getWebElements = function () {
        var ptor = browser;
        var locator = loc;
        return ptor.waitForAngular().then(function() {
          if (locator.findElementsOverride) {
            return locator.findElementsOverride(ptor.driver, null, ptor.rootEl);
          } else {
            return ptor.driver.findElements(locator);
          }
        });
      }
      var ArrayFinderFull = new ElementArrayFinder(browser, getWebElements, loc);
      super(browser, ArrayFinderFull);
    }

    check() {
        return this.isSelected().then(selected => selected? this.click() : null)
    }
}

describe('Protractor Experiments', function() {
  it('testing different pageobjects for different browsers', function() {
    var getPage = function(page) {
        console.log('first?', this.first);
        console.log('second?', this.second);
        if (this.first) {
            let firstPage = page.firstVersion(this);
            return new firstPage();
        }
        if (this.second) {
            let secondPage = page.secondVersion(this);
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
    let createdPage = firstB.getPage(Page);
    console.log('got a page', createdPage);
    createdPage.get();

    secondB.close();
  });

  it('extending base ElementFinder', function () {
    browser.get('https://angularjs.org/');

    // so here we are finding element by css selector
    let todoApp = $('div[app-run="todo.html"]'); //todo app container

    let checkboxwrapped = new CheckBox(by.css('input[type="checkbox"]'));

    checkboxwrapped.check().then(function() {
        expect($('input[type="checkbox"]').isSelected()).toBe(false);
    });
  });
});
