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
        }

        this.RPclient = new Service(rpConfig);
    }

    async jasmineStarted(suiteInfo) {
        let resp = await this.RPclient.startLaunch({
            start_time: new Date().valueOf(),
            name: "PROTRACTOR",
        })
        console.log('GOT LAUNCH ID', resp.id)
        this.launchID = resp.id
    }

    async suiteStarted(suite: any) {
        console.log(this.launchID)
        this.currentSuite = suite
        let requestData = {
            name: this.currentSuite.fullName,
            launch_id: this.launchID,
            start_time: new Date().valueOf(),
            type: "SUITE",
            description: this.currentSuite.description,
        }

        let resp = await this.RPclient.startTestItem(requestData)
        console.log('SUITE ID IS: ', resp)
        this.currentSuite.reportportal_id = resp.id
    }

    async specStarted(spec) {
        this.currentTest = spec

        let requestData = {
            name: this.currentTest.description,
            launch_id: this.launchID,
            start_time: new Date().valueOf(),
            type: "TEST",
            description: this.currentTest.description,
        }
        let resp = await this.RPclient.startTestItem(requestData, this.currentSuite.reportportal_id)
        console.log('TESTID IS ', resp)
        this.currentTest.reportportal_id = resp.id
    }

    async specDone(result) {
        var params = {
            status: result.status,
            end_time: new Date().valueOf()
        }
        console.log('FINISHING TEST', this.currentTest)
        this.RPclient.finishTestItem(this.currentTest.reportportal_id, params)
    }

    async suiteDone(suite) {
        var params = {
            status: suite.status,
            end_time: new Date().valueOf()
        }
        console.log('FINISHING SUITE', this.currentSuite)
        this.RPclient.finishTestItem(this.currentSuite.reportportal_id, params)
    }

    async jasmineDone(results) {
        var params = {
            status: 'passed',
            end_time: new Date().valueOf()
        }
        console.log('Launchid', this.launchID)
        try {
            await this.RPclient.finishLaunch(this.launchID, params)
        } catch (err) {
            console.log('got error durring finishLaunch', err)
        }

    }
}