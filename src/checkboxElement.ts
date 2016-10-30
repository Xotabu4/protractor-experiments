import {ElementFinder, ElementArrayFinder } from 'protractor'

export class CheckBox extends ElementFinder {

    constructor(elementToExtend:ElementFinder) {
      super(elementToExtend.browser_ , elementToExtend.elementArrayFinder_);
    }

    check(){
        console.log(':::Doing check()!')
        this.click()
    }
}


export class CheckBoxes extends ElementArrayFinder {

    constructor(elementToExtend:ElementArrayFinder) {
      super(elementToExtend.browser_ , elementToExtend.getWebElements, elementToExtend.locator_);
    }

    check(){
        console.log('Doing check()!:::', this)
        this.click()
    }
}


