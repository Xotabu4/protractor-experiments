"use strict";
exports.config = {
  directConnect: true,

  framework: 'jasmine2',
    specs: ['script.js'],
  capabilities: {
    'browserName': 'firefox'
  },

  onPrepare: function() {
  }
};
