import { browser, element, by, $, ProtractorBrowser } from 'protractor'

export function getPage<T extends BasePage, K extends keyof HomePageRoles>(page: Page, role:string): HomePageRoles[K] {
    //TODO: Unfortunately loosing types here. Don't know how to better fix this.
    let obj = page.versions[role]
    return obj
}

export interface OwnBrowser extends ProtractorBrowser {
    role: 'admin' | 'user' | 'guest'
}



interface Page {
    new (_browsr: OwnBrowser)
    versions: HomePageRoles
}

interface Roles {
    admin
    user
    guest
}

interface HomePageRoles extends Roles {
    admin: AdminHomePage,
    user: UserHomePage,
    guest: GuestHomePage
}


export class BasePage {
    constructor(protected _browsr: OwnBrowser) { }
};


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
    versions: HomePageRoles

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
