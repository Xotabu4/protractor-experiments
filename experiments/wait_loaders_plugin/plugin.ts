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

        return browser.driver.wait(until.elementLocated(By.css('OLO')), 100)
            .then(()=> {
                return true
            }, 
            (err)=> {
                module.exports.addFailure('FAILED WAIT!')
                return true
            })
        //return this.config.condition()()
    }
};

module.exports = new WaitLoaderPlugin();



