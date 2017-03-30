import {browser, element, by, $} from 'protractor'

/**
 * Sometimes you need to write tests that are working with 2 browsers same time
 * For example - chats, video, some colaboration tools
 * It is hard to keep objects in good shape. 
 * This is one of the first version of pattern, 
 */ 

describe('Multibrowser PageObjects', function () {
    let admin:any
    let user:any

    beforeEach(()=> {
        var getPage = (page)=> {
            if (this.isAdmin) {
                let firstPage = page.adminVersion;
                return new firstPage();
            }
            if (this.isUser) {
                let secondPage = page.secondVersion;
                return new secondPage();
            }
        }
        admin = browser;
        user = browser.forkNewDriverInstance();
        
        admin.isAdmin = true;
        user.isUser = false;
        
        user.isAdmin = false;
        user.isUser = true;

        admin.getPage = getPage;
        user.getPage = getPage;
    })

    it('creating different pageobject instances depending on browser', function () {
        var HomePage = require('./pages.js').HomePage;
        
        let resultadmin = admin.getPage(HomePage).banAllUsers();
        let resultuser = user.getPage(HomePage).login();

        expect(resultadmin).toBe('ALL USERS ARE BANNED!');
        expect(resultuser).toBe('YOU ARE LOGGED IN!');

    });
});
