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
        //TODO: ERROR! seems like old friend came back. Getting RangeError: Maximum call stack size exceeded
        // .each() calls .map inside, so same error appears.
        this.each((el: any, num) => {
            el.check();
            console.log('checked number: ', num)
        })
    }
}



