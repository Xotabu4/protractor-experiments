import { browser, $, $$, by, element, protractor } from 'protractor'

describe('Adding own jquery selector', () => {

    it('should be possible', async function () {
        await browser.waitForAngularEnabled(false)
        await browser.get('http://akjsdf.com/')
        
        console.log(await browser.findElement(by.jQuery('div')).isDisplayed())
        await browser.sleep(60000)
        console.log(await browser.findElement(by.jQuery('div')).isDisplayed())
    }, 100000)
})

declare const window: any
