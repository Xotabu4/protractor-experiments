import { browser, $, by, element } from 'protractor'

describe('Tests', () => {

    it('Passed TEST!', async function () {
        await browser.get('')
        await $('body').getText()
    })

    it('FAILED TEST!', async function () {
        await browser.get('')
        await $('nonexist').getText()
    })
})