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

module.exports = Page;
