import { Config } from 'protractor'

let conf: Config = {
    directConnect: true,
    baseUrl: 'http://www.protractortest.org/testapp/ng1/#/form',
    specs: ['./experiment.js'],
    SELENIUM_PROMISE_MANAGER: false
}

exports.config = conf