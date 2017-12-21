import { browser, element, by, $, ProtractorBrowser } from 'protractor'
import { HomePage, BasePage, OwnBrowser, getPage } from './pages'

/**
 * Sometimes you need to write tests for multiple user roles
 * It is hard to keep objects in good shape, because each role requires own PageObject
 * 
 * This experiment is attempt to detect version of pageObject that needed from special parameter 'role'
 * might be scaled for as many browsers as you need.
 */

describe('Multibrowser PageObjects', function () {
    let admin: OwnBrowser
    let user: OwnBrowser
    let guest: OwnBrowser

    beforeEach(() => {
        admin = browser as OwnBrowser
    })

    it('creating different pageobject instances depending on browser', function () {
        let adminPage = admin.getPage(HomePage)
        let userPage = user.getPage(HomePage)
        let guestPage = guest.getPage(HomePage)


        //Some specific actions
        expect(adminPage.banAllUsers()).toBe('ALL USERS ARE BANNED!');
        expect(userPage.createTask()).toBe('Task Created!');
        expect(guestPage.login()).toBe('YOU ARE LOGGED IN!');

        //Shared actions between all roles
        expect(adminPage.contactSupport()).toBe('SUPPORT CONTACTED');
        expect(userPage.contactSupport()).toBe('SUPPORT CONTACTED');
        expect(guestPage.contactSupport()).toBe('SUPPORT CONTACTED');
    });
});
