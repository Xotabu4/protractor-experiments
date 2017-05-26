import { browser, $, by, element } from 'protractor'

describe('NAME: SUITE', () => {

    it('NAME: Passed TEST!', async function () {
        await browser.get('')
        await browser.sleep(2000)
        await $('body').getText()
    })

    it('NAME: FAILED TEST!', async function () {
        await browser.get('')
        await browser.sleep(2000)
        await $('nonexist').getText()
    })
})