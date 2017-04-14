
declare function it(param:string, func:Function):any //Original it returns void in typings

const doRun = true
const doNotRun = false

let runIf = (condition, suiteOrTest) => {
    if (condition) {
        return suiteOrTest
    }
    // Returning nothing in this case. This marks test as pending without message.
    // https://jasmine.github.io/api/edge/global.html#it
}

describe('Conditional execution', runIf(doRun, () => {
    it('Test that will be executed', () => {
        console.log('I SHOULD BE RUN!')
    });

    it('disabling test', runIf(doNotRun, () => {
        // Some other test
        console.log('I SHOULD NOT BE RUN!')
    }))
    
    it('original pending', ()=>{
        console.log('i am pending')
    }).pend('PENDING')
}))

let runSuiteIf = (condition, suiteOrTest) => {
    if (condition) {
        return suiteOrTest
    }
    return pending
}

describe('disalbing suites', runSuiteIf(false, () => {
    it('Can be applied for tests as well', runIf(false, () => {
        // Some other test
        console.log('I SHOULD NOT BE RUN!')
    }))
}))
