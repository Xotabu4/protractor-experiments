import {ElementFinder} from 'protractor'
import {AbstractNote} from './abstractNote'

export class ArchivedNoteFragment extends AbstractNote {    
    constructor(elem) {
        super(elem)        
    }
    
    edit(title:string, body:string) {
        console.log('editing...')
    }

    unarchive() {
        
    }

    delete() {

    }

    changeColor(color:string) {

    }
}
