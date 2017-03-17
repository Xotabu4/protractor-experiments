import { AbstractNote } from './abstractNote'

export class NoteFragment extends AbstractNote {
    constructor(elem) {
        super(elem)
    }

    edit(title: string, body: string) {
        console.log('editing...')
    }

    archive() {
        console.log('archiving...')
    }

    delete() {
        console.log('deleting...')
    }

    changeColor(color: string) {
        console.log('changing color...')
    }
}