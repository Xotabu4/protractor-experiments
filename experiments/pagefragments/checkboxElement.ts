import { ElementFinder, ElementArrayFinder } from 'protractor'
import { BaseFragment, BaseArrayFragment } from 'protractor-element-extend'

export class CheckBox extends BaseFragment {

    constructor(elementToExtend: ElementFinder) {
        super(elementToExtend);
    }

    check() {
        console.log(':::Doing check()!')
        this.click()
    }
}


export class CheckBoxes extends BaseArrayFragment<CheckBox> {

    constructor(elementsToExtend: ElementArrayFinder) {
        super(elementsToExtend, CheckBox);
    }

    check() {
        this.each((el: any, num) => {
            el.check();
            console.log('checked number: ', num)
        })
    }
}



