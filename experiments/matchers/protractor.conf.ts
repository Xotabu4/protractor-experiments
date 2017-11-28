import { Config, ExpectedConditions, $ } from 'protractor'
//import * as matchers from 'jasmine-protractor-matchers'
import matchers = require('jasmine-protractor-matchers')

let conf: Config = {
  directConnect: true,
  baseUrl: 'http://www.protractortest.org/testapp/ng1/',
  specs: ['./experiment.js'],

  onPrepare: function () {
    beforeEach(function () {
      jasmine.addMatchers(matchers)
    })
  },

  SELENIUM_PROMISE_MANAGER: false
}

exports.config = conf;