import {browser, element, by, ExpectedConditions as EC} from 'protractor'
//import {CheckBoxes} from './checkboxElement'
let CheckBoxes:any

describe('Extending ElementFinder/ElementArrayFinder', function () {
    //Does not work yet. Switch to lib version 2.0.0
    xit('custom collection extended from ElementArrayFinder', function () {
        browser.get('http://www.protractortest.org/testapp/ng1/#/form')

        let checkboxes = new CheckBoxes(element.all(by.model('show')))

        checkboxes.count().then(console.log)

        let first = checkboxes.get(0)

        expect(first.isSelected()).toBeTruthy();    
        checkboxes.check()
        first.isSelected().then(console.log)
        expect(first.isSelected()).toBeFalsy();
    }); 
})