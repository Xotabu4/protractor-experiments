import { ElementFinder, ElementArrayFinder } from 'protractor'

/*
    Wrapper around ElementArrayFinder. Dirty hack while protractor bug will be fixed:
    https://github.com/angular/protractor/issues/2227
*/
export class NotesCollectionFragment<T> {
    arrayFinder: ElementArrayFinder
    class_: any
    /**
     * @param arrayFinder - ElementArrayFinder that you want to wrap
     * @param class_ - constructor function(class) that will be used to wrap each element of arrayFinder
     */
    constructor(arrayFinder: ElementArrayFinder, class_: any) {
        this.arrayFinder = arrayFinder
        this.class_ = class_
    }

    get(index) {
        return new this.class_(this.arrayFinder.get(index))
    }

    first():T {
        return new this.class_(this.arrayFinder.first())
    }

    last() {
        return new this.class_(this.arrayFinder.last())
    }

    count() {
        return this.arrayFinder.count()
    }

    each(func: Function) {
        return this.arrayFinder.each((elem, index) => {
            return func(new this.class_(elem), index)
        })
    }

    map(func: Function) {
        // This method is potentially unsafe, it can lead to stackoverflow due to protractor bug
        return this.arrayFinder.map((elem, index) => {
            return func(new this.class_(elem), index)
        })
    }

}