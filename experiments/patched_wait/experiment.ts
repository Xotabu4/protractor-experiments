import {$, by, element, ExpectedConditions as EC} from 'protractor'
import { PatchedProtractorBrowser } from '../..'

declare const browser: PatchedProtractorBrowser

describe('async/await', function () {

    it('testing rejected promises', async function () {
        await browser.get('')
        await browser.wait(EC.visibilityOf($('nbody')));
        await $('body').getText()
    })
})