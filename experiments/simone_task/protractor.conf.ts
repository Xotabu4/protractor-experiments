"use strict";
import { Config } from 'protractor'

let conf: Config = {
  directConnect: true,
  baseUrl: 'https://qa-engineer.herokuapp.com',
  specs: ['./spec.js'],
};

exports.config = conf;