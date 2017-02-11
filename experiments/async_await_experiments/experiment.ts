/**
 * Created by xotab on 28.07.2016.
 */

import {browser, $, by, element} from 'protractor'

/**
 * Still a lot of questions how this gonna work.
 * You need protractor with webdriverjs 3.0 (currently beta version of protractor)
 * You need TypeScript 2.1
 * You need NodeJS 7.x or even NodeJS 8.x
 * you need SELENIUM_PROMISE_MANAGER = 0 as environment variable
 * https://github.com/SeleniumHQ/selenium/issues/2969
 * 
 * You need to patch jasminewd function 
   function validateFunction(functionToValidate) {
       replace if (functionToValidate && Object.prototype.toString.call(functionToValidate) === '[object Function]') {
       with if (functionToValidate && (Object.prototype.toString.call(functionToValidate) === '[object Function]' || Object.prototype.toString.call(functionToValidate) === '[object AsyncFunction]' )) {
 */

describe('async/await', ()=> {

    it('simple async assertion', async function () {
        browser.get('')
        let attributeClass = await $('body').getAttribute('class')
        console.log(`When using await - assertion goes to resolved object: attributeClass == 'ng-scope' is `,
                     attributeClass == 'ng-scope')
    })

    fit('working with exceptions', async function () {
        browser.get('')

        // Now we can use more familiar try/catch syntax to catch errors
        try {
            await $('nonexist').click()
        } catch (err) {
            console.log('Got error!', err)
        }

        try {
            await $('body').getText()
        } finally {
            console.log('Finally executed always')
        }

        //BEFORE:

        //catch errors
        $('nonexist').click().then(undefined, err=> console.log('Got error!', err) )

        //finally block - does not work, no function thenFinally.
        /** 
            $('bodys').getText().thenFinally((err)=> {
                console.log('Finally block')
                throw err 
            })
        */

        $('body').getText().then((text)=> {
            console.log('Finally block')
        }, (err)=> {
            console.log('Finally block')
            throw err 
        })

        //Test will be passed since error is not propagated outside.
    })
})