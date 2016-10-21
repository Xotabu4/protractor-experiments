"use strict";


exports.config = {
  directConnect: true,

  baseUrl: 'http://www.protractortest.org/testapp/ng1/#/form',

  framework: 'jasmine2',
    specs: ['specs/spec.ts'],
  capabilities: {
    'browserName': 'chrome'
  },

  onPrepare: function() {

  }
};
console.log('DONE!')