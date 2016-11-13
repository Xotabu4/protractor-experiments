import {ElementFinder, ElementArrayFinder } from 'protractor'
import {BaseElement, BaseElementArray} from 'protractor-element-extend'

export class CheckBox extends BaseElement {

    constructor(elementToExtend:ElementFinder) {
      super(elementToExtend);
    }

    check(){
        console.log(':::Doing check()!')
        this.click()
    }
}


export class CheckBoxes extends BaseElementArray {

    constructor(elementsToExtend:ElementArrayFinder) {
      super(elementsToExtend, CheckBox);
    }
}


