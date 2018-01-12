import { browser, $, by, element, ExpectedConditions as EC } from 'protractor'
import { myBrowser as mybrowsr} from './myBrowser'
declare const myBrowser: mybrowsr

describe('Own extended browser', () => {
    it('testing own browser', async function () {
        console.error('TEST WILL FAIL, page open does not work')
        await myBrowser.get('http://www.protractortest.org/testapp/ng1/#/form', 100000)
        await myBrowser.sleep(1000)
    }, 60000)
})