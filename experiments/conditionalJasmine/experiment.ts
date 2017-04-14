
const doNotRun = true
const doRun = true

/**
 * 
 * @param condition Any boolean condition to check
 * @param suiteOrTest function, that contains scheduling of tests.
 */
function runIf(condition, suiteOrTest) {
    if (condition) {
        return suiteOrTest
    } else {
        console.log('Skipping execution')
    }
}

describe('Conditional execution', runIf(doRun, () => {
    it('Test that will be executed', () => {
        console.log('I SHOULD BE RUN!')
    });

    it('Can be applied for tests as well', runIf(doNotRun, () => {
        // Some other test
        console.log('I SHOULD NOT BE RUN!')
    }))
}))