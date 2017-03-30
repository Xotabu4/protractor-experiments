/**
 * This file shows configuration for desktop chrome browser to be ran in mobile emulation mode.
 * https://sites.google.com/a/chromium.org/chromedriver/mobile-emulation
 */

import { Config, ExpectedConditions, $ } from 'protractor'

let conf: Config = {
  directConnect: true,
  baseUrl: 'http://www.protractortest.org/testapp/ng1/#/form',
  specs: ['./experiment.js'],
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'mobileEmulation': {'deviceName': 'Google Nexus 5'}
    }
  }
};

exports.config = conf;