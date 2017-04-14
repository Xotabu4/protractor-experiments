
class SomeType {
    //somethingElse: String

    doSomething() {
        console.log('doing')
    }
}



class SomeType2 {
    //somethingElse: String

    doSomething() {
        console.log('doing')
    }

    doSomething2() {

    }
}

let some = new SomeType()
some['somethingElse'] = 'something else'

console.log(some)