/**
 * Created by xotab on 28.07.2016.
 */

import {browser, $, by, element} from 'protractor'

/**
 * Still a lot of questions how this gonna work.
 * You need protractor with webdriverjs 3.0 (currently beta version of protractor)
 * You need TypeScript 2.1
 * You need NodeJS 7.x
 * you need SELENIUM_PROMISE_MANAGER = 0 as environment variable
 */

xdescribe('async/await', function () {
    it('', async function () {
        browser.get('/')
        let attributeClass = await $('body').getAttribute('class')
        console.log('ATTRIBUTE CLASS', attributeClass == 'ng-scope')
    })
})