import { Config, ExpectedConditions, $ } from 'protractor'

declare const browser: any
let conf: Config = {
    //directConnect: true,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl: 'http://www.protractortest.org/testapp/ng1/#/form',
    specs: ['./tests/*.js'],
    SELENIUM_PROMISE_MANAGER: false,
    capabilities:
        {
            browserName: 'safari',
            shardTestFiles: true,
            maxInstances: 3
        },

    onPrepare: async function () {
        await browser.waitForAngularEnabled(false)
    },

    onComplete: async function () {
        await browser.quit()
    }

    
};

exports.config = conf;