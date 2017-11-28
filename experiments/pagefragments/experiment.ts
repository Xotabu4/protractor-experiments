import { $, $$, browser, element, by, promise, ExpectedConditions as EC, ElementFinder } from 'protractor'
import { CheckBoxes, CheckBox } from './checkboxElement'
import { BaseFragment } from 'protractor-element-extend'

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
