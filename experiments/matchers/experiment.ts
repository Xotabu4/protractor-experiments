import { browser, element, by, $, $$, protractor } from 'protractor'

xdescribe('Matchers tests', function () {
    beforeEach(function () {

        browser.get('')
    });

    it('creating custom jasmine matcher function with wait', function () {

        expect($('body')).toAppear()
        expect($('body')).not.toDisappear()
        expect($('nonexist')).toDisappear()
        expect($('nonexist')).not.toAppear()
        expect($('#animals')).toHaveClass('ng-scope')
        expect($('#animals')).not.toHaveClass('TEST')
    });

    it('creating custom jasmine matcher function with wait - negative case', function () {

        // expect(expect($('nonexist')).toAppear).toThrowError()
        // expect(expect($('nonexist')).not.toDisappear).toThrowError()

        // expect(expect($('body')).toDisappear).toThrowError()
        // expect(expect($('body')).not.toAppear).toThrowError()

        //expect($('#animals')).toHaveClass('TEST', 10)
        expect($('#animals')).not.toHaveClass('ng-scope', 10000)

        //expect($('#animals')).toHaveClass('TEST', 10)
        //expect($('#animals')).not.toHaveClass('ng-scope', 10)
    });
})


class Command {
    name_
    parameters_

    /** @param {string} name The name of this command. */
    constructor(name) {
        /** @private {string} */
        this.name_ = name;

        /** @private {!Object<*>} */
        this.parameters_ = {};
    }

    /** @return {string} This command's name. */
    private getName() {
        return this.name_;
    }

    /**
     * Sets a parameter to send with this command.
     * @param {string} name The parameter name.
     * @param {*} value The parameter value.
     * @return {!Command} A self reference.
     */
    setParameter(name, value) {
        this.parameters_[name] = value;
        return this;
    }

    /**
     * Sets the parameters for this command.
     * @param {!Object<*>} parameters The command parameters.
     * @return {!Command} A self reference.
     */
    setParameters(parameters) {
        this.parameters_ = parameters;
        return this;
    }

    /**
     * Returns a named command parameter.
     * @param {string} key The parameter key to look up.
     * @return {*} The parameter value, or undefined if it has not been set.
     */
    getParameter(key) {
        return this.parameters_[key];
    }

    /**
     * @return {!Object<*>} The parameters to send with this command.
     */
    getParameters() {
        return this.parameters_;
    }
}

describe('No implitcit wait!', function () {


    beforeEach(async function () {
        await browser.get('')
    })

    it('Test', async function () {
        await expect($('non exist')).toAppear()
    })
})