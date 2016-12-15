
xdescribe('Extending WebElements!', function () {
    it('Checkbox', function () {
        browser.get('http://www.protractortest.org/testapp/ng1/#/form')

        let checkbox = new CheckBoxes(element.all(by.model('show')))
        checkbox.get(0).check()
        expect(checkbox.get(0).isSelected()).toBeTruthy();
    }); 
})