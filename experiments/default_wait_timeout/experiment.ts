import { browser, $, by, element, ExpectedConditions as EC } from 'protractor'
describe('async/await', () => {
    it('testing rejected promises', async function () {
        await browser.get('')
        await browser.wait(EC.visibilityOf($('non-exist')))

        await browser.wait(EC.or(EC.urlIs(''), EC.urlContains('')), 123, 'Page is not opened.');
    })
})