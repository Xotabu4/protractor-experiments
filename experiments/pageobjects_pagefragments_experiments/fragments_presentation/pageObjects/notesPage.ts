import { BaseFragment } from 'protractor-element-extend'
import { BaseArrayFragment as NotesCollection } from 'protractor-element-extend'
import { NoteFragment } from './fragments/note/noteFragment'
import { NavigationBarFragment } from './fragments/navigationBarFragment'
import { $$, $, element, browser, by, ExpectedConditions as EC } from 'protractor'

export class NotesPage {
    noteEditor: NoteEditorFragment
    navigationBar: NavigationBarFragment
    notes: NotesCollection<NoteFragment>

    constructor() {
        this.noteEditor = new NoteEditorFragment()
        this.navigationBar = new NavigationBarFragment()
        this.notes = new NotesCollection<NoteFragment>(
            $$('.grid-container .grid-item'),
            NoteFragment)
    }

}

class NoteEditorFragment extends BaseFragment {
    titleField
    bodyField

    constructor() {
        super($('.note-editor'))
        this.titleField = this.$('input[placeholder="Title"]')
        this.bodyField = this.$('textarea')
    }

    createNote(title, body) {
        this.activate()
        this.bodyField.clear()
        this.bodyField.sendKeys(body)

        this.titleField.clear()
        this.titleField.sendKeys(title)

        element(by.buttonText('Save')).click()
        browser.wait(EC.invisibilityOf(this.titleField), 2000,
            'Title should became hidden after submit')
    }

    activate() {
        this.click()
        browser.wait(EC.and(EC.elementToBeClickable(this.titleField), EC.elementToBeClickable(this.bodyField)),
            2000, 'Title and Body field should be ready to type after activation')
    }
}
