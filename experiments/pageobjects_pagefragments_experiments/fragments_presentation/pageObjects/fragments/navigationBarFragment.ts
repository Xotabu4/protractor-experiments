import {$, $$, ExpectedConditions as EC, browser, ElementFinder} from 'protractor'
import {BaseFragment} from 'protractor-element-extend'

export class NavigationBarFragment extends BaseFragment {
    openMenuButton:ElementFinder

    constructor() {
        super($('.navbar'))
        this.openMenuButton = this.$('.navbar-right a.dropdown-toggle')
    }

    openMenu() {
        this.openMenuButton.click()
        let menu = new MenuFragment()
        browser.wait(EC.visibilityOf(menu), 2000, 
            'Menu should became visible after open')

        return menu
    }
}

class MenuFragment extends BaseFragment {
    archiveNoteLink
    
    constructor() {
        super($('li.dropdown.open ul.dropdown-menu'))
        this.archiveNoteLink = this.$(`a[href*='archive-notes']`)
    }

    openArchiveNotesPage() {
        this.archiveNoteLink.click()
    }

}