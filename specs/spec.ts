/**
 * Created by xotab on 28.07.2016.
 */


import {CheckBox} from '../src/checkboxElement'
import {$, browser} from 'protractor'
declare var describe, it:any


describe ('', function () {
    it('', function () {
        browser.ignoreSynchronization = true
        browser.get('https://www.hotwire.com/package/index.jsp')
        browser.sleep(5000)
        let checkbox = new CheckBox($('#isPartialHotelStay'))

        checkbox.check()
        
        browser.sleep(10000)
    }); 
}); 