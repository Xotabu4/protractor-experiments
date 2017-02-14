import {ElementFinder, browser, ExpectedConditions as EC, $, $$} from 'protractor'

describe('Page Fragments', function () {
    beforeAll(function () {
        browser.manage().timeouts().implicitlyWait(2000);        
        browser.get('')
        browser.sleep(200)
        browser.wait(EC.visibilityOf($('.navbar')), 10000, 
            'Header should be visible after page open')
    })

    it('initialize own fragment just like any other object', function () {

    })

    it('inherit one fragments from anothers', function () {

    })
    
    it('compose more complicated fragments with composition', function () {

    })

    it('create custom collections of your own fragments', function () {

    })
})
