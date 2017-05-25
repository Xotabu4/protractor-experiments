import { Config, ExpectedConditions, $ } from 'protractor'
import { ReportPortal } from './reportPortalReporter'

let conf: Config = {
  directConnect: true,
  baseUrl: 'http://www.protractortest.org/testapp/ng1/#/form',
  specs: ['./experiment.js'],

  onPrepare: function () {
    jasmine.getEnv().addReporter(new ReportPortal());
  },

  SELENIUM_PROMISE_MANAGER: false
};

exports.config = conf;