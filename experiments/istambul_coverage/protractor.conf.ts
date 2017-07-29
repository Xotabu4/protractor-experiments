"use strict";
import { Config, ExpectedConditions, $ } from 'protractor'

let conf: Config = {
  directConnect: true,
  baseUrl: 'http://localhost:8081',
  specs: ['./experiment.js'],
  SELENIUM_PROMISE_MANAGER: false
};

exports.config = conf;