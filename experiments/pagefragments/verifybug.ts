import { $, $$, browser, element, by, ExpectedConditions as EC, ElementFinder } from 'protractor'
import { Locator } from "protractor/built/locators";
import { CheckBoxes, CheckBox } from './checkboxElement'
import { BaseFragment } from 'protractor-element-extend'


class TextboxClass extends BaseFragment {
    constructor(element) {
        super(element) //that's it! now your 'this' reference, is reference to element passed to super constructor
    }//-

    //You can extend it with any methods that you what, and use internal reference to your element
    setContent(textSet) {
        let self = this;
        this.all(by.xpath)
        this.clear()
            .then(function () {
                return self.sendKeys(textSet);
            })
            .then(function () {
                return self.getAttribute('value');

            })
            .then(function (textGet) {
                if (textGet == textSet) {
                    console.log("Set Text '" + textGet + "' Successfully !");
                    return true;
                }
                else {
                    console.warn("Set Text '" + textGet + "' Unsuccessfully !");
                    return false;
                }
            })


    }

    getContent() {
        let self = this;
        self.getAttribute('value')

            .then(function (textGet) {
                return textGet;
            })


    }

}
class CheckboxClass extends BaseFragment {
    constructor(element) {
        super(element) //that's it! now your 'this' reference, is reference to element passed to super constructor
    }

    //You can extend it with any methods that you what, and use internal reference to your element
    select() {
        this.isSelected().then(selected => {
            if (!selected) {
                this.click()
                // Notice that because your element is valid ElementFinder - you can pass it as parameter to ExpectedConditions!
                browser.wait(EC.elementToBeSelected(this), 5000, `Checkbox ${this.locator()} must became selected after click, but it wasn't`)
            } else {
                console.warn(`Checkbox ${this.locator()} was already selected, skipping select`)
            }
        })
    }

    unselect() {
        this.isSelected().then(selected => {
            if (selected) {
                this.click()
                // Notice that because your element is valid ElementFinder - you can pass it as parameter to ExpectedConditions!
                browser.wait(EC.not(EC.elementToBeSelected(this)), 5000, `Checkbox ${this.locator()} must became unselected after click, but it wasn't`)
            } else {
                console.warn(`Checkbox ${this.locator()} was already unselected, skipping unselect`)
            }
        })
    }

}

class ComboboxClass extends BaseFragment {
    constructor(element) {
        super(element) //that's it! now your 'this' reference, is reference to element passed to super constructor
    }

    selectDropdownByIndex(index, milliseconds) {
        this.findElements(by.tagName('option'))
            .then(function (options) {
                options[index].click();
            });
        if (typeof milliseconds !== 'undefined') {
            browser.sleep(milliseconds);
        }
    }

    selectRandom() {

        this.element(by.xpath('//option[3]')).click();
        // .then(function (options) {
        //     let random = Math.floor((Math.random() * (options.length - 1)));
        //     if (random == -1) {
        //         random = 0
        //     }
        //     console.log(options.length);
        //     if (options.length > 0) {
        //         options[random].click();
        //     }
        // });


    }

    selectDropdownByText(Text, milliseconds) {
        this.findElements(by.tagName('option'))
            .then(function (options) {
                for (let i = 0; i < options.length; i++) {
                    if (options[i].getText()
                        .then(function (textGet) {
                            if (textGet == Text) {
                                return true;
                            }
                            else {
                                return false;
                            }
                        })) {

                        options[i].click();
                    }

                }
            });
        if (typeof milliseconds !== 'undefined') {
            browser.sleep(milliseconds);
        }
    }

    getOptions() {
        this.all(by.xpath('//option'))
            .then(function (options) {
                for (let i = 0; i < options.length; i++) {
                    options[i].getText()
                        .then(function (textGet) {
                            console.log(textGet);
                        })
                }
            })
    }

}


describe('Checking that BaseFragment returns only related options', () => {
    it('text from css nested options', () => {
        browser.get('')
        let raw_elems = $('select[ng-model="fruit"]').all(by.css('option')).getText()
        raw_elems.then(text=> {
            console.log(text)
            //prints only options for fruit model
        })
    })

    it('text from xpath nested options', () => {
        browser.get('')
        //let select_frag = new ComboboxClass($('[ng-model="dayColor.color"]'))
        //select_frag.getOptions()

        //let fruits_frag = new ComboboxClass($('select[ng-model="fruit"]'))
        //fruits_frag.getOptions()
        let raw_elems = $('select[ng-model="fruit"]').all(by.xpath('//option')).getText()

        raw_elems.then(text=> {
            console.log(text)
            //prints all selectors options, parent element is ignored!
        })
    })
})