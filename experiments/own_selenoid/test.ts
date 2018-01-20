import {browser, $, ExpectedConditions as EC} from 'protractor'
export async function TEST() {
    await browser.get('')
    try {
        await browser.wait(EC.invisibilityOf($('body')), global['SLEEP_TIMEOUT'])
    } catch (error) {
        console.log('successfully errored as expected')
    }
    try {
        await browser.wait(EC.invisibilityOf($('body')), global['SLEEP_TIMEOUT'])
    } catch (error) {
        console.log('successfully errored as expected')
    }
    try {
        await browser.wait(EC.invisibilityOf($('body')), global['SLEEP_TIMEOUT'])
    } catch (error) {
        console.log('successfully errored as expected')
    }
    try {
        await browser.wait(EC.invisibilityOf($('body')), global['SLEEP_TIMEOUT'])
    } catch (error) {
        console.log('successfully errored as expected')
    }
    try {
        await browser.wait(EC.invisibilityOf($('body')), global['SLEEP_TIMEOUT'])
    } catch (error) {
        console.log('successfully errored as expected')
    }
    await browser.sleep(global['SLEEP_TIMEOUT'])
}