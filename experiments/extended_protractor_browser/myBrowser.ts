import { ProtractorBrowser } from 'protractor'

export class myBrowser extends ProtractorBrowser {

    constructor(browser: ProtractorBrowser) {
        super(browser)
    }

    get(url, timeout) {
        return super.get(url, timeout)
    }

    sleep(timeout: number = 1000) {
        console.log('Sleeping for:', timeout, 'ms')
        return super.sleep(timeout)
    }

}

