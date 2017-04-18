import { $, $$, browser, element, by, ExpectedConditions as EC } from 'protractor'
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

class TestFragment extends BaseFragment {
    constructor(element) {
        super(element);
    }

    getOneInnerElement() {
        return this.$('span')
    }

    getManyInnerElements() {
        return this.$$('span')
    }
}

describe('Verifying #10 bug', () => {
    it('checking $ function', () => {
        browser.get('')
        browser.sleep(5000)
        let text = new TestFragment($('html')).getOneInnerElement().getText()
        text.then(rtext=> console.log('OLOLO', rtext))

        let texts = new TestFragment($('html')).getManyInnerElements().getText()
        texts.then(rtexts=> console.log('OLOLO', rtexts))
    })

})




class Select extends BaseFragment {
    constructor(element) {
        super(element);
    }

    selectOption(text) {
        this.element(by.cssContainingText('option', text)).click();
    }

    getSelectedText() {
    	// NOTE: Apparently you can't use the shorthand element locators ($ and $$) with this package.
        return this.$('select').getAttribute('value')
            .then((index) => {
                return this.element(by.css(`option[value="${index}"]`)).getText();
            });
    }
}

describe('Verifying #10 bug with same objects', () => {
    it('with fragment', () => {
        browser.get('')
        let select_frag = new Select($('body'))
        let text = select_frag.getSelectedText()
        text.then(rtext => console.log('$$$$ got text', rtext))
    })
})