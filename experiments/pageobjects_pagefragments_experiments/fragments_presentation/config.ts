import {Config} from 'protractor'

let conf:Config = {
  directConnect: true,
  baseUrl: 'http://www.hiteshbalar.com/preserver/notes',
  specs: ['./'],
};

exports.config = conf;