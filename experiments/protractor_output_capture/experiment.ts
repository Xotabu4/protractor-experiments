import { browser, $, by, element } from 'protractor'
describe('async/await', function () {

    it('testing rejected promises', async function () {
        await browser.get('')
        await $('body').getText()
    })
    it('testing rejected promises failed', async function () {
        await browser.get('')
        await $('non-exist').getText()
    })
})