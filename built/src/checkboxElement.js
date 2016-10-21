"use strict";
const protractor_1 = require('protractor');
class CheckBox extends protractor_1.ElementFinder {
    constructor(elementToExtend) {
        super(elementToExtend.browser_, elementToExtend.elementArrayFinder_);
    }
    check() {
        console.log('Doing check()!:::', this);
        this.click();
    }
}
exports.CheckBox = CheckBox;
class CheckBoxes extends protractor_1.ElementArrayFinder {
    constructor(elementToExtend) {
        super(elementToExtend.browser_, elementToExtend.getWebElements, elementToExtend.locator_);
    }
    check() {
        console.log('Doing check()!:::', this);
        this.click();
    }
}
exports.CheckBoxes = CheckBoxes;
//# sourceMappingURL=checkboxElement.js.map