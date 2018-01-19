/**
 * Created by xotab on 28.07.2016.
 */

import {browser, $, by, element} from 'protractor'

/**
 * Still a lot of questions how this gonna work.
 * You need TypeScript 2.1
 * you need SELENIUM_PROMISE_MANAGER = false in protractor conf
 * https://github.com/SeleniumHQ/selenium/issues/2969 
 */

describe('async/await', ()=> {

    it('testing rejected promises', async function () {
        await browser.get('')
        await browser.sleep(5000)
        await $('body').getText()
    })
})