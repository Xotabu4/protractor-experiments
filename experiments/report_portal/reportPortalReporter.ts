var Service = require("reportportal-client");

export class ReportPortal {
    private RPclient
    private launchID
    private currentSuite
    private currentTest

    constructor() {
        const rpConfig = {
            endpoint: "http://localhost:8080/api/v1",
            project: "default_personal",
            token: "4044a955-30da-499e-a42b-945009af17bb",
            launch: "TEST LAUNCH"
        };

        this.RPclient = new Service(rpConfig);
    }

    async jasmineStarted(suiteInfo) {
        let resp = await this.RPclient.startLaunch({
            start_time: new Date().valueOf(),
            name: "JS TEST NAME",
        })
        console.log(resp)
        this.launchID = resp.id
    }

    async suiteStarted(suite: any) {
        console.log(this.launchID)
        this.currentSuite = suite
        let requestData = {
            name: "OLOLONAME SUITE",
            launch_id: this.launchID,
            start_time: new Date().valueOf(),
            type: "SUITE",
            description: this.currentSuite.fullName,
        }

        let resp = await this.RPclient.startTestItem(requestData)
        console.log(resp)
    }

    async specStarted(spec) {
        let requestData = {
            name: "OLOLONAME TEST",
            launch_id: this.launchID,
            start_time: new Date().valueOf(),
            type: "TEST",
            description: 'MY TEST NAME!',
        }
        let resp = await this.RPclient.startTestItem(requestData)
        console.log(resp)
    }

    specDone(result) {
        //this.RPclient.finishTestItem()
    }

    suiteDone(suite) {

    }

    jasmineDone() {
        console.log('Finished Jasmine');
    }
}

let reporter = new ReportPortal()
async function doRun() {
    await reporter.jasmineStarted({})
    await reporter.suiteStarted({})
    await reporter.specStarted({})
}
//doRun()

