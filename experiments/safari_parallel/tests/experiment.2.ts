import {browser, $, by, element} from 'protractor'

describe('async/await', ()=> {

    it('testing rejected promises', async function () {
        await browser.get('')
        await browser.sleep(5000)
        await $('body').getText()
    })
})