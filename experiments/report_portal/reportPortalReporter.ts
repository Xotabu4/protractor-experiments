var Service = require("reportportal-client");

export class ReportPortal {
    private RPclient

    constructor() {
        const rpConfig = {
            endpoint: "http://localhost:8080",
            project: "default_personal",
            token: "4044a955-30da-499e-a42b-945009af17bb",
            launch: "TEST LAUNCH"
        };

        this.RPclient = new Service(rpConfig);
    }

    async jasmineStarted(suiteInfo) {
        var startLaunchResponse = await this.RPclient.startLaunch({
            name: "JS tests experiments",
        });
    }

    suiteStarted(suite) {

    }

    specStarted(spec) {

    }

    specDone(result) {

    }

    suiteDone(suite) {

    }

    jasmineDone() {
        console.log('Finished Jasmine');
    }
}