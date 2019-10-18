require("ts-node").register({ files: true });

let conf = {
    directConnect: false,
    seleniumAddress: "http://localhost:4444/wd/hub",
    baseUrl: "http://www.protractortest.org/testapp/ng1/#/form",
    specs: ["./experiment.ts"],
    SELENIUM_PROMISE_MANAGER: false,
    onPrepare: function() {
        /**
         * This monkey-patching is needed to fix some of protractor bugs.
         * - Wrong stacktrace on error, that leads to nowhere
         * - Unique error messages that does not allow to group them in allure report
         * - No default timeout
         */
        function patchProtractorWait() {
            browser.originalWait = browser.wait;
            browser.wait = function(predicate, timeout, message) {
                // Means timeout is not passed
                if (typeof timeout === "undefined") {
                    timeout = 10000;
                }
                // Means timeout is not passed, and message is second argument
                if (
                    typeof timeout === "string" &&
                    typeof message === "undefined"
                ) {
                    message = timeout;
                    timeout = 10000;
                }

                // Creating Error object to save current stacktrace, before we entered async callbacks
                const rootErr = new Error();
                return browser
                    .originalWait(predicate, timeout, message)
                    .then(undefined, err => {
                        // Patching TimeoutError with proper stacktrace
                        err.stack = rootErr.stack;
                        // Patching TimeoutError with static error message
                        err.message =
                            message || `Wait timed out after ${timeout} ms`;
                        throw err;
                    });
            };
        }
        patchProtractorWait()
    }
};

exports.config = conf;
