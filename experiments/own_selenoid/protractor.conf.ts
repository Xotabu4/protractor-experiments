import { Config, ExpectedConditions, $ } from 'protractor'

// For testing purposes only
// Automatically synchronically generating needed number of test files on config parsing
// Be sure that selenoid browser limit is set correctly
var fs = require('fs');
global['SLEEP_TIMEOUT'] = 3000;
var fs = require('fs');
let testFileTemplate =
`
let TEST = require('../test').TEST
describe(module.filename, () => {
    // Just using TEST function in test.js as test
    it('TEST ' + module.filename, TEST)
})
`
let test_files_number = 24
let index = 0
while (index < test_files_number) {
  fs.writeFileSync(`./tests/test_${index}.js`, testFileTemplate, {flag: 'w+'})
  index += 1
}

let conf: Config = {
  //directConnect: true,
  seleniumAddress: process.env.SELENOID_URL || 'YOU MUST SET SELENOID_URL ENV VARIABLE like: http://your-server-here:4444/wd/hub',
  baseUrl: 'https://www.angularjs.org/',
  specs: ['./tests/*.js'],
  SELENIUM_PROMISE_MANAGER: false,
  multiCapabilities: [
    { browserName: 'chrome', enableVNC: true, shardTestFiles: true, maxInstances: 24 },
    //{ browserName: 'firefox', enableVNC: true },
    //{ browserName: 'opera', operaOptions: { "binary": "/usr/bin/opera" }, enableVNC: true }
  ],
  jasmineNodeOpts: {
    defaultTimeoutInterval: 120000
  }

};

exports.config = conf;