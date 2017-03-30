"use strict";
import { Config, ExpectedConditions, $ } from 'protractor'

let conf: Config = {
  directConnect: true,
  baseUrl: 'http://www.protractortest.org/testapp/ng1/#/form',
  specs: ['./experiment.ts'],

  //  plugins: [{
  //    path: 'experiments/wait_loaders_plugin/plugin.js',
  //  }],

  SELENIUM_PROMISE_MANAGER: false
};

exports.config = conf;