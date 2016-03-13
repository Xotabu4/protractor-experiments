/**
 * Created by xotab on 13.03.2016.
 */
"use strict";


var customMatchers = {
    toAppear: function () {
        return {
            compare: function (element) {
                var actual = element;
                var timeout = arguments[1] || 3000;
                var message = arguments[2];

                return {
                    pass: actual.ptor_.wait(protractor.ExpectedConditions.visibilityOf(actual), timeout)
                        .thenCatch((err) => false),
                    message: message ||
                    'Element ' + actual.parentElementArrayFinder.locator_.toString() + ' has not appear within ' + timeout + ' ms'
                }
            }
        };
    },
    toDisappear: function () {
        return {
            compare: function (element) {
                var actual = element;
                var timeout = arguments[1] || 3000;
                var message = arguments[2];
                return {
                    pass: actual.ptor_.wait(protractor.ExpectedConditions.invisibilityOf(actual), timeout)
                        .thenCatch((err) => false),
                    message: message ||
                    'Element ' + actual.parentElementArrayFinder.locator_.toString() + ' has not dissapear within ' + timeout + ' ms'
                }
            }
        };
    }
};

module.exports = customMatchers;