import {ProtractorPlugin, PluginConfig} from 'protractor/built/plugins';
import {ExpectedConditions, browser, ProtractorBrowser, $} from 'protractor';
import { until, By} from 'selenium-webdriver'

// creating a "var module: any" will allow use of module.exports
declare var module: any;

class WaitLoaderPlugin implements ProtractorPlugin {
    config:PluginConfig

    waitForCondition(browser: ProtractorBrowser) {
        //let cond = this.config.condition()
        console.log('called!')

        //Calling original wait is needed to not trigger waitForCondition recursively :)
        return browser.driver.wait(until.elementLocated(By.css('OLO')), 100)
            .then(()=> {
                return true
            }, 
            (err)=> {
                module.exports.addFailure('FAILED WAIT!')
                // Still have no solution to stop test from plugin, for now test continue to execute until finished.
                return true
            })
        //return this.config.condition()()
    }
}

module.exports = new WaitLoaderPlugin();



