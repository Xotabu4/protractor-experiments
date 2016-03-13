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
      };
      var ArrayFinderFull = new ElementArrayFinder(browser, getWebElements, loc);
      super(browser, ArrayFinderFull);
    }

    check() {
        return this.isSelected().then(selected => selected? this.click() : null)
    }
}

module.exports = CheckBox;
