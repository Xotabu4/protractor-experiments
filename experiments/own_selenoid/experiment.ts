/**
 * Created by xotab on 28.07.2016.
 */

import {browser, $, by, element, ExpectedConditions as EC, Key} from 'protractor'

/**
 * Still a lot of questions how this gonna work.
 * You need TypeScript 2.1
 * you need SELENIUM_PROMISE_MANAGER = false in protractor conf
 * https://github.com/SeleniumHQ/selenium/issues/2969 
 */

describe('async/await', ()=> {

    it('testing rejected promises', async function () {
        //await browser.manage().window().maximize()
        await browser.get('')
        await browser.sleep(20000)
        //console.log('GOT HTML: ', await browser.getPageSource())
    })
})