import { Config, ExpectedConditions, $ } from 'protractor'

let conf: Config = {
  directConnect: true,
  baseUrl: 'http://www.protractortest.org/testapp/ng1/#/form',
  //specs: ['*/*/experiment.js'], //have no test for this :)

  plugins: [{
     path: 'experiments/wait_loaders_plugin/plugin.js',
  }]
};

exports.config = conf;