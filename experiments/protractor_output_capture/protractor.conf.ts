"use strict";
import { Config, ExpectedConditions, $ } from 'protractor'

let conf: Config = {
  directConnect: true,
  baseUrl: 'http://www.protractortest.org/testapp/ng1/#/form',
  specs: ['./experiment.js'],
  SELENIUM_PROMISE_MANAGER: false,
  resultJsonOutputFile: './out.json'
};

exports.config = conf;