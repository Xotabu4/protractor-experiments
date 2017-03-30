class HomePage {
  static get adminVersion () {
    return AdminHomePage;
  }
  static get userVersion () {
    return UserHomePage;
  }
}

class AdminHomePage extends HomePage{
    banAllUsers() {
        return 'ALL USERS ARE BANNED!';
    }
}

class UserHomePage extends HomePage{
    login() {
        return 'YOU ARE LOGGED IN!';
    }
}

module.exports.HomePage = HomePage;
