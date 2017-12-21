# Experiments

Having fun with protractor. This repo is my experiments with this cool framework.
Code might not work, be incompatible with everything, or even just be stupid and useless :)

I created this repo for myself. But i see that lot of users are came here for something. If you have some idea - feel free to contact me: http://xotabu4.github.io

`npm install && npm run tsc` is needed before all experiments


`/experiments/async_await/` - trying protractorJS with fresh async/await syntax. 

`/experiments/conditionalJasmine/` - experiment with executing it or describe only if some condition is met

`/experiments/default_wait_timeout/` - letting browser.wait to work with default timeout specified, instead of waiting forever

`/experiments/electronjs_app_testing/` - attempts to run protractor tests for electronjs application

`/experiments/injecting_jquery_selectors/` - trying to inject jquery to the page, and use it for elements lookup. DO NOT RECOMMENDED.

`/experiments/istambul_coverage/` - trying to grab code coverage information from page with protractor

`/experiments/matchers` - testing own jasmine-protractor-matchers library - https://github.com/Xotabu4/jasmine-protractor-matchers

`/experiments/mobile_chrome` - chromedriver has awesome possibilities to access chrome browser almost everywhere - desktop, real mobile device, android virtual device (AVD), or even emulate mobile browser on desktop browser thru chrome dev tools. Trying diferent options to connect to chrome browser.

`/experiments/multibrowser_pageobjects` - trying to organize pageobjects for different users on website with different permissions. See experiments/multibrowser_pageobjects/readme.md in that folder, and check the code.

`/experiments/pagefragments` - testing own protractor-element-extend library. Playing with pagefragments approach. Inheriting from ElementFinder and ElementArrayFinder.

`/experiments/report_portal/` - NOT FINISHED. Writting own client, to connect to report portal service

`/experiments/run_without_compile` - does not work currently. Attempts to run protractor tests without compling TypeScript code before. ts-node, system-js used

`/experiments/typescript/` - Just testing how to work with typescript features

`/experiments/wait_loaders_plugin` - building own plugin that would wait for loader to dissapear before doing ANY action on the pages

