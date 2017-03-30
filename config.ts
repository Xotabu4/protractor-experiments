"use strict";
import { Config, ExpectedConditions, $ } from 'protractor'

let conf: Config = {
  directConnect: true,
  baseUrl: 'http://www.protractortest.org/testapp/ng1/#/form',

  framework: 'jasmine2',
  specs: ['*/*/experiment.js'],
  capabilities: {
    'browserName': 'chrome',
  },

  onPrepare: function () {

  },

  //  plugins: [{
  //    path: 'experiments/wait_loaders_plugin/plugin.js',
  //  }],

  SELENIUM_PROMISE_MANAGER: false
};

exports.config = conf;