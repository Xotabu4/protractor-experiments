### Multiroles pageobjects

Problem: Often we have different user roles on the site. For example Admin - can see everything, can do everything, User - sees something, can do something, Guest - can see only something, can't do anything. This makes hard to work with existing pageobjects structure.

Experiment:
Patch browser instance to have additional role field
Add additional method to browser instance, that will find apropriate page object version depending on currect role


To run - 
1) Compile everything  
`npm run tsc`
2) Run with global protractor (or local) in current directory -  
```
protractor
```


Idea is to have shared logic in BasicPage (this can be even abstract class), but this object won't be used directly. Instead you will work with pageobjects for each user.

![alt tag](https://github.com/Xotabu4/Protractor-Experiments/blob/master/experiments/multibrowser_pageobjects/structure.jpeg?raw=true)
