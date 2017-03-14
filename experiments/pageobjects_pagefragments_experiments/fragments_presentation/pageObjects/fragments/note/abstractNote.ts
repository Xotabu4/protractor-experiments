import { ElementFinder } from 'protractor'
import { BaseFragment } from 'protractor-element-extend'

export class AbstractNote extends BaseFragment {
    titleElement: ElementFinder
    bodyElement: ElementFinder

    constructor(elem) {
        super(elem)
        this.titleElement = this.$$('.my-note p').first()
        this.bodyElement = this.$$('.my-note p').get(1)
    }

    getTitle() {
        return this.titleElement.getText().then(text => text.trim())
    }

    getBody() {
        return this.bodyElement.getText().then(text => text.trim())
    }

    getColor() {
        return this.getCssValue('background-color')
    }

}

