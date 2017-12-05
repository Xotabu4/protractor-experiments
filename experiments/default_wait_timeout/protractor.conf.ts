import { Config, ExpectedConditions, $, browser } from 'protractor'

let conf: Config = {
  directConnect: true,
  baseUrl: 'http://www.protractortest.org/testapp/ng1/#/form',
  specs: ['./experiment.js'],
  SELENIUM_PROMISE_MANAGER: false,

  onPrepare: function () {
    let generic_wait = browser.wait

    browser.wait = function (predicate, timeout = browser.params.EXPLICIT_WAIT_TIMEOUT, message) {
      return generic_wait.apply(browser, [predicate, timeout, message])
    } 
    
  },
  params: {
    EXPLICIT_WAIT_TIMEOUT: 10000
  }
};

exports.config = conf;