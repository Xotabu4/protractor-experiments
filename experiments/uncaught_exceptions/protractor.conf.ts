"use strict";
import { Config, ExpectedConditions, $ } from 'protractor'

// process.on('uncaughtException', (err) => {
//     console.warn('OLOLO MY ERROR:', err)
//     throw err
// });

let conf: Config = {
  seleniumAddress: "http://127.0.0.1:12344",
  baseUrl: 'http://www.protractortest.org/testapp/ng1/#/form',
  specs: ['./specs/*.js'],
  SELENIUM_PROMISE_MANAGER: false,
  capabilities: {
    browserName: 'chrome',
    shardTestFiles: true,
    maxInstances: 3,
  },

  afterLaunch: () => {
    console.log('AFTER LAUNCH DONE!')
  }
};

exports.config = conf;