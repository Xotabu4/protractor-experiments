/**
 * Some attemps to inject jQuery on the page to enable jQuery selectors like 'div:visible'
 * 
 * Variants
 * 1) As a protractor plugin - does not work well for angular page re-renders and iframes
 * 2) As a pre-script that injects - problems with async nature of jQuery loading
 * 3) NOT TRIED YET - Load jQuery content on nodeJS side, via simple http get, and pass it to addLocator script as parameter :)
 * 
 */
import { Config, ExpectedConditions, $, browser, protractor } from 'protractor'


declare const window: any
declare const jQuery: any

let conf: Config = {
    directConnect: true,
    baseUrl: 'http://www.protractortest.org/testapp/ng1/#/form',
    specs: ['./experiment.js'],
    SELENIUM_PROMISE_MANAGER: false,

    onPrepare() {
        protractor.By.addLocator('jQuery_hidden', jQueryLocator);



        let proxy = new Proxy(protractor.By.jQuery_hidden, {
            get: function (target, key, reciever) {
                console.log('PROXY CALL!');
                injectjQuery()
                return target[key]
            }
        })
        proxy.toString = Function.prototype.toString.bind(protractor.By.jQuery_hidden)
        return protractor.By.addLocator('jQuery', proxy)
    },

    // plugins: [{
    //     inline: {
    //         onPageLoad: function () {
    //             return browser.executeAsyncScript(function () {
    //                 var callback = arguments[arguments.length - 1];
    //                 var head = document.getElementsByTagName("head")[0];
    //                 var script = document.createElement("script");
    //                 script.src = "http://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js";
    //                 script.onload = function () {
    //                     window.AUTOTESTS_JQUERY = jQuery.noConflict(true);
    //                     callback()
    //                 };
    //                 head.appendChild(script);
    //             }).catch(function (error) {
    //                 throw new Error(`Cannot inject jQuery to a page!: ${JSON.stringify(error, undefined, 2)}`)
    //             })
    //         }
    //     }
    // }]
};

exports.config = conf;


/**
 * Adds jQuery variable to window
 * @returns {promise.Promise<any>}
 */
function injectjQuery() {
    function throwIfHasError(error) {
        // Since protractor provides only one callback in async scripts, throwing exceptions nicely.
        if (error) {
            throw new Error('Cannot inject jQuery to the page!: ' + JSON.stringify(error, undefined, 2))
        }
    }
    return browser.executeAsyncScript(function () {
        var callback = arguments[arguments.length - 1];
        if (!window.jQuery) {
            var head = document.getElementsByTagName("head")[0];
            var script = document.createElement("script");
            script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js";
            script.onload = function () {
                callback()
            };
            script.onerror = function (error) {
                callback(new Error("Error loading " + JSON.stringify(error)));
            };

            head.appendChild(script);
        } else {
            // Dunno why this might needed, just copypasted. Some dark magic
            var vernums = window.jQuery.fn.jquery.split('.');
            if (parseInt(vernums[0]) >= 2 || (parseInt(vernums[0]) === 1 && parseInt(vernums[1]) >= 8)) {
                window.jQuery.expr[':'].econtains = window.jQuery.expr.createPseudo(function (arg) {
                    return function (elem) {
                        return window.jQuery(elem).text().trim().match('^' + arg + '$');
                    };
                });
                window.jQuery.expr[':'].icontains = window.jQuery.expr.createPseudo(function (arg) {
                    return function (elem) {
                        return window.jQuery(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
                    };
                });
            }
            callback()
        }
    }).then(throwIfHasError, throwIfHasError)

}


function jQueryLocator(locator, optParentElement) {
    try {
        return window.jQuery(locator, optParentElement);
    } catch (error) {
        throw new Error('Cannot find injected jQuery on window object')
    }
}
