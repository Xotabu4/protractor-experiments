
let conf = {
  // directConnect: true,
  seleniumAddress: "http://ip-5236.sunline.net.ua:4444/wd/hub/",
  baseUrl: 'http://www.protractortest.org/testapp/ng1/#/form',
  specs: ['./test.js'],
}

exports.config = conf;