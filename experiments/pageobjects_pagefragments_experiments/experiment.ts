
xdescribe('PageObjects', function () {

    /**
     * Sometimes you need to write tests that are working with 2 browsers same time
     * For example - chats, video, some colaboration tools
     * It is hard to keep objects in good shape. 
     * This is one of the first version of pattern, 
     */ 
    it('creating different pageobject instances depending on browser', function () {
        var getPage = function (page) {
            if (this.first) {
                let firstPage = page.firstVersion;
                return new firstPage();
            }
            if (this.second) {
                let secondPage = page.secondVersion;
                return new secondPage();
            }
        }
        var firstB:any = browser;
        var secondB:any = browser.forkNewDriverInstance();
        firstB.first = true;
        secondB.first = false;
        firstB.second = false;
        secondB.second = true;

        firstB.getPage = getPage;
        secondB.getPage = getPage;
        var Page = require('./pages.js');
        let numberone = firstB.getPage(Page).doAction();

        let numbertwo = secondB.getPage(Page).doAction();
        expect(numberone).toBe(1);
        expect(numbertwo).toBe(2);

    });
});
