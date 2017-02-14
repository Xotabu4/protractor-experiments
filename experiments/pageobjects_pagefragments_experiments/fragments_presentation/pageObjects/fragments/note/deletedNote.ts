import {ElementFinder} from 'protractor'
import {AbstractNote} from './abstractNote'

export class DeletedNoteFragment extends AbstractNote {    
    constructor(elem) {
        super(elem)        
    }

    deleteForever() {

    }

    restore() {

    }
}
