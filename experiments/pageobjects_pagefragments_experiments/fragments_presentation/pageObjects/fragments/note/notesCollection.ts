import {ElementFinder, ElementArrayFinder} from 'protractor'

//Wrapper around ElementArrayFinder.
export class NotesCollectionFragment {
    arrayFinder:ElementArrayFinder
    class_:any
    constructor(arrayFinder:ElementArrayFinder, class_:any) {
        this.arrayFinder = arrayFinder
        this.class_ = class_
    }

    get(index) {
        return new this.class_(this.arrayFinder.get(index))
    }

    first() {
        return new this.class_(this.arrayFinder.first())
    }

    last() {
        return new this.class_(this.arrayFinder.last())
    }

    count() {
        return this.arrayFinder.count()
    }

    each(func:Function) {
        return this.arrayFinder.each((elem, index)=> {
            return func(new this.class_(elem), index)
        })
    }

    map(func:Function) {
        return this.arrayFinder.map((elem, index)=> {
            return func(new this.class_(elem), index)
        })
    }

}