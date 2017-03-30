import {Config} from 'protractor'

let conf:Config = {
  directConnect: true,
  baseUrl: 'http://www.hiteshbalar.com/preserver/notes',
  specs: ['./specs/fragments_spec.js'],
};

exports.config = conf;