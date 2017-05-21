import { Config, ExpectedConditions, $ } from 'protractor'

let conf: any = {
  //directConnect: true,
  baseUrl: 'http://www.protractortest.org/testapp/ng1/#/form',
  specs: ['./experiment.js'],

  capabilities: {
    browserName: 'electron',
    chromeOptions: {
      // Here is the path to your Electron binary.
      binary: '..\soundnode-app\dist\Soundnode\Soundnode-win32-x64\Soundnode.exe'
    }

  },
  SELENIUM_PROMISE_MANAGER: false
};

exports.config = conf;