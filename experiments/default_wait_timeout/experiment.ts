import { browser, $, by, element, ExpectedConditions as EC } from 'protractor'
describe('async/await', () => {
    it('testing rejected promises', async function () {
        await browser.get('')
        await browser.wait(EC.visibilityOf($('non-exist')))
    })
})