"use strict";
class Page {
  static get firstVersion () {
    return UserOnePage;
  }
  static get secondVersion () {
    return UserTwoPage;
  }
}

class UserOnePage extends Page{
    doAction() {
        return 1;
    }
}

class UserTwoPage extends Page{
    doAction() {
        return 2;
    }
}

module.exports = Page;
