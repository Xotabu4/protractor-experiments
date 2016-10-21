/**
 * Created by xotab on 28.07.2016.
 */
"use strict";
const checkboxElement_1 = require('../src/checkboxElement');
const protractor_1 = require('protractor');
describe('', function () {
    it('', function () {
        protractor_1.browser.ignoreSynchronization = true;
        protractor_1.browser.get('https://www.hotwire.com/package/index.jsp');
        protractor_1.browser.sleep(5000);
        let checkbox = new checkboxElement_1.CheckBox(protractor_1.$('#isPartialHotelStay'));
        checkbox.check();
        protractor_1.browser.sleep(10000);
    });
});
//# sourceMappingURL=spec.js.map