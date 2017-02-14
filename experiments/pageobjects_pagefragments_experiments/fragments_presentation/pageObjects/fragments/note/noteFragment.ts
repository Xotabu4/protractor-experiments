import {ElementFinder} from 'protractor'
import {AbstractNote} from './abstractNote'

export class NoteFragment extends AbstractNote {    
    constructor(elem) {
        super(elem)        
    }
    
    edit(title:string, body:string) {
        console.log('editing...')
    }

    archive() {

    }

    delete() {

    }

    changeColor(color:string) {

    }
}