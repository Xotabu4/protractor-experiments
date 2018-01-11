"use strict";
import { Config, ExpectedConditions, $ } from 'protractor'

let conf: Config = {
  //directConnect: true,
  seleniumAddress: 'URLHERE:4444/wd/hub',
  baseUrl: 'http://www.protractortest.org/testapp/ng1/#/form',
  specs: ['./experiment.js'],
  SELENIUM_PROMISE_MANAGER: false,
  multiCapabilities: [
    { browserName: 'chrome', enableVNC: true },
    { browserName: 'firefox', enableVNC: true },
    { browserName: 'opera', operaOptions: { "binary": "/usr/bin/opera" }, enableVNC: true }
  ]
};

exports.config = conf;