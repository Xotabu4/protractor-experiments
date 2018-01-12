import { Config, ExpectedConditions, $, browser } from 'protractor'
import { myBrowser as mybrowsr } from './myBrowser';

let conf: Config = {
  seleniumAddress: 'http://ip-5236.sunline.net.ua:4444/wd/hub',
  baseUrl: 'http://www.protractortest.org/testapp/ng1/#/form',
  specs: ['./experiment.js'],
  SELENIUM_PROMISE_MANAGER: false,

  getPageTimeout: 60000,

  capabilities: {
    browserName: 'chrome',
    enableVNC: true
  },
  onPrepare: function () {
    global['myBrowser'] = new mybrowsr(browser)
  }
};
declare const myBrowser: any
exports.config = conf;