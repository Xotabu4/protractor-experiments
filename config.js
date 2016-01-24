"use strict";
exports.config = {

  directConnect: true,
  framework: 'jasmine',
    specs: ['script.js'],
  capabilities: {
    browserName: 'chrome'
  },

  onPrepare: function() {
    var getP = function(page) {
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

    var prepareBrowsers = function() {
      global.firstB = browser;
      global.secondB = browser.forkNewDriverInstance();
      firstB.first = true;
      secondB.first = false;
      firstB.second = false;
      secondB.second = true;

      firstB.getP = getP;
      secondB.getP = getP;
    }

    prepareBrowsers()
  }
}
