class Human {

}

class User extends Human {

}

class Animal {

}

console.log(new User() instanceof Human)
console.log(new Animal() instanceof Human)
console.log(new Human() instanceof Human)