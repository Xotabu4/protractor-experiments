import { browser, $, $$, by, element, protractor, ExpectedConditions as EC } from 'protractor'

describe('QA Engineer Test', function () {
    beforeAll(function () {
        browser.waitForAngularEnabled(false)
        browser.get('');
    });

    it('reach code page via Enter button, then lists page', () => {
        let timeout = 3000;

        browser.wait(EC.textToBePresentInElement($('#enter'), "Enter"), timeout, 'Expect to find button with Enter as text');
        $('#enter').click();
        browser.wait(EC.urlContains('/code'), timeout);
        $('input[type="hidden"]').getAttribute("value").then((valuex) => {
            $('input[type="text"]').sendKeys(valuex);
        });

        element(by.buttonText('Submit')).click();
        browser.wait(EC.urlContains('/lists'), timeout);

        expect($('body').getText()).not.toContain('Something is wrong: You are not a robot, go away!')
    });


    it('should verify quotes and categories', () => {
        const famousQuotesToAssert = [
            `A classic is something that everyone wants to have read and nobody wants to read.`,
            `If your life was a horse, you'd have to shoot it.`,
            `You have taken yourself too seriously.`,
            `Yes there is a lot of people doing a great job out there.`,
            `You have the capacity to learn from mistakes. You'll learn a lot today.`
        ]

        const awesomeQuotesToAssert = [
            `Beware of low-flying butterflies.`,
            `Excellent time to become a missing person.`,
            `I love deadlines. I love the whooshing sound they make as they fly by.`,
            `Nothing so needs reforming as other people's habits.`,
            `Do something unusual today. Pay a bill.`
        ]


        let famousQuotesBlock = element(by.cssContainingText('body>ul>li', 'Famous Quotes'))
        browser.wait(EC.visibilityOf(famousQuotesBlock), 10000, 'famous should be visible')

        let awesomeQuotesBlock = element(by.cssContainingText('body>ul>li', 'Awesome Quotes'))
        browser.wait(EC.visibilityOf(awesomeQuotesBlock), 10000, 'awesome should be visible')

        let famousQuotes = famousQuotesBlock.$$('ul>li span:not(.score)').getText()
        expect(<any>famousQuotes.then(fQuotes => fQuotes.length)).toBe(famousQuotesToAssert.length)
        famousQuotesToAssert.map(quoteToAssert => expect(famousQuotes).toContain(quoteToAssert))


        let awesomeQuotes = awesomeQuotesBlock.$$('ul>li span:not(.score)').getText()
        expect(<any>awesomeQuotes.then(aQuotes => aQuotes.length)).toBe(awesomeQuotesToAssert.length)
        awesomeQuotesToAssert.map(quoteToAssert => expect(awesomeQuotes).toContain(quoteToAssert))

        let scoresSumm = $$('span.score').getText().then(texts => {
                return (texts as any).reduce((prev, current)=> (+prev) + (+current))
            })
        
        let totalScore = $('body').getText().then(text=> {
            let matched = /Total score: (.*)/gm.exec(text)
            return +matched[1]
        })

        expect(totalScore).toBe(scoresSumm)
    });
});