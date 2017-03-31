import { browser, element, by, $, ProtractorBrowser } from 'protractor'

export interface OwnBrowser extends ProtractorBrowser {
    role: 'admin' | 'user' | 'guest'
}

interface Page {
    new (_browsr: OwnBrowser)
    versions: Roles
}

export function getPage(page: Page) {
    //TODO: Unfortunately loosing types here. Don't know how to better fix this. Should dig into this:
    //https://blog.mariusschulz.com/2017/01/06/typescript-2-1-keyof-and-lookup-types
    let obj = page.versions[(this as OwnBrowser).role]
    return obj
}

interface Roles {
    admin
    user
    guest
}

export class BasePage {
    constructor(protected _browsr: OwnBrowser) { }
}

/**
 * Each your Page will have 4 versions
 * basic version to extend from - HomePage
 * guest version - GuestHomePage
 * admin version - AdminHomePage
 * user version - UserHomePage
 * and so on.
 * getPage function knows what version of page to return depending on browser.
 */
export class HomePage extends BasePage {
    versions: {
        'admin': AdminHomePage,
        'user': UserHomePage,
        'guest': GuestHomePage
    }

    //Some shared action between all user roles.
    contactSupport() {
        return 'SUPPORT CONTACTED'
    }
}

class AdminHomePage extends HomePage {
    banAllUsers() {
        return 'ALL USERS ARE BANNED!';
    }
}

class UserHomePage extends HomePage {
    createTask() {
        return 'Task Created!';
    }
}

class GuestHomePage extends HomePage {
    login() {
        return 'YOU ARE LOGGED IN!';
    }
}
