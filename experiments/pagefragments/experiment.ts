import { $, $$, browser, element, by, ExpectedConditions as EC } from 'protractor'
import { CheckBoxes, CheckBox } from './checkboxElement'

xdescribe('Extending ElementFinder/ElementArrayFinder', function () {
    //Does not work yet. Switch to lib branch 2.0.0
    it('custom collection extended from ElementArrayFinder', function () {
        browser.get('')

        let checkboxes = new CheckBoxes(element.all(by.model('show')))

        let first = checkboxes.get(0);

        let firstfnres = checkboxes.first()
        let last = checkboxes.last()

        checkboxes.count().then(console.log)

        expect(first.isSelected()).toBeTruthy();
        checkboxes.check()
        first.isSelected().then(console.log)
        expect(first.isSelected()).toBeFalsy();

        first.check()
        first.isSelected().then(console.log)
        expect(first.isSelected()).toBeTruthy();
    });
})

describe('Getting parrent element locator inside nested fragments', () => {
    it('custom collection extended from ElementArrayFinder', function () {

    })
})