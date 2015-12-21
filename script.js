describe('Protractor Demo App', function() {

  it('should have a title', function() {
    first = browser;
    second = browser.forkNewDriverInstance();


    //browser.get('http://juliemr.github.io/protractor-demo/');

    var AngularHomepage = function(browser) {

      this.get = function() {
        browser.get('http://www.angularjs.org');
      };

    };


    Page = function (page) {
      //console.log(this);
      return new page(this);
    };


    first.Page = Page
    second.Page = Page
    second.Page(AngularHomepage).get();
  });

});
