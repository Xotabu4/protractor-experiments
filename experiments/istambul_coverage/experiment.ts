/**
 * Created by xotab on 28.07.2016.
 */

import {browser, $, by, element} from 'protractor'

describe('async/await', ()=> {
    it('testing some coverage', async function () {
        await browser.get('/ng1/#/form')
        await $('form input[ng-model="userInput"]').sendKeys('Test')
        await $('form button#sendUser').click()

        await $('form input[ng-model="message"]').sendKeys('Hello world')
    })
})