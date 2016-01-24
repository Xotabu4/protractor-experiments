"use strict";

class Page {

  static firstVersion () {
    return UserOnePage;
  }

  static secondVersion () {
    return UserTwoPage;
  }

}

class UserOnePage extends Page{
    get() {
        console.log('GOT FIRST!')
    }
}

class UserTwoPage extends Page{
  get() {
      console.log('GOT SECOND!')
  }
}

describe('Protractor Experiments', function() {

  it('test', function() {
    let createdPage = firstB.getP(Page);
    console.log('got a page', createdPage);
    createdPage.get();

  });

});
