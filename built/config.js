"use strict";
exports.config = {
    directConnect: true,
    baseUrl: 'http://www.protractortest.org/testapp/ng1/#/form',
    framework: 'jasmine2',
    specs: ['specs/spec.js'],
    capabilities: {
        'browserName': 'chrome'
    },
    onPrepare: function () {
    }
};
//# sourceMappingURL=config.js.map