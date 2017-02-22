import {ElementFinder, browser, ExpectedConditions as EC, $, $$} from 'protractor'
import {NotesPage} from '../pageObjects/notesPage'
import {AbstractNote} from '../pageObjects/fragments/note/abstractNote'
import {NoteFragment} from '../pageObjects/fragments/note/noteFragment'


describe('Page Fragments', function () {
    let notesPage = new NotesPage()

    beforeAll(function () {
        browser.manage().timeouts().implicitlyWait(2000);        
        browser.get('')
        browser.sleep(200)
        browser.wait(EC.visibilityOf($('.navbar')), 10000, 
            'Header should be visible after page open')
    })

    it('works pretty well with PageObject pattern', function () {
        let notesPage = new NotesPage()
        
        notesPage.navigationBar.openMenu().openArchiveNotesPage()

        browser.wait(EC.urlContains('archive-notes'), 5000, 
            'Url should contain "archive-notes" after navigate')

    })

    it('use OOP to make your tests more flexible', function () {
        // abstractNote.ts -> archivedNote.ts -> deletedNote.ts

        let note = notesPage.notes.first()

        // getBody - is method from abstractNote
        note.getBody().then(console.log)
        note.getColor().then(console.log)

        expect(note instanceof ElementFinder).toBe(true, "Fragment still should be ElementFinder")
        expect(note instanceof AbstractNote).toBe(true, "Fragment should be AbstractNote")
        expect(note instanceof NoteFragment).toBe(true, "Fragment should be NoteFragment")
    })
    
    it('you can use your fragments in pretty tricky way', function () {
        console.warn('WITH GREAT POWER COMES GREAT RESPONSIBILITY')

        let note = notesPage.notes.first()
        browser.wait(EC.visibilityOf(note), 2000, 'Waiting for note fragment to be visible')
        
        notesPage.notes.map((note, number)=> {
            // iterating thru collection of custom fragments
            note.getBody().then(body=> console.log(`Body for note ${number} is ${body}`))
        })

        // Chaining search, starting searhing inside our fragment
        note.$('div').getText().then(console.log)
        
    })

    
})
