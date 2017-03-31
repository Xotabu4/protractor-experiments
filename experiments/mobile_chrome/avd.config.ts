/**
 * This file shows configuration for mobile chrome browser to be run inside Android Virtual Device.
 * 
 * 1) You must have adb installed.
 * 2) You must have avd device running. Mobile Chrome must be installed on that device. 
 *    Actually this is huge pain, since you can't just install chrome on emulator. 
 *    Chrome requires Google Play Services, that are not usualy present on mobile device.
 *    Try to use this config for avd: 
        Name: Pixel_XL_API_25
        CPU/ABI: Google APIs Intel Atom (x86)
        Target: google_apis [Google APIs] (API level 25)
        hw.device.name: pixel_xl
        image.androidVersion.api: 25
 *    Pixel virtual devices come with Google Chrome preinstalled, but with old version (~52) that isn't supported by latest chromedriver.
 *   
 * 3) Notice that your chromedriver version on this computer must be compatible with Mobile Chrome version on virtual device
 * 
 * https://sites.google.com/a/chromium.org/chromedriver/getting-started/getting-started---android
 * 
 * GOOD NEWS : 
 *  Config for running with real device is the same! Yay! 
 *  Just enable debug mode on your device and connect it (USB/Wi-Fi/TCP-IP)
 *  then in terminal run:
      > adb devices
 *  If you seeing something like this, than you can try to run your tests
        List of devices attached
        emulator-5554	device
        03376b9f546b184f	device

 */

//TODO: find way to start emulator programmatically
//TODO: find way to update/install Chrome right into emulator/real device

import { Config, ExpectedConditions, $ } from 'protractor'

let conf: Config = {
  //seleniumAddress: 'http://localhost:4444/wd/hub/',
  directConnect: true,
  baseUrl: 'http://www.protractortest.org/testapp/ng1/#/form',
  specs: ['./experiment.js'],
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'androidPackage': 'com.android.chrome',
      //'androidDeviceSerial':'emulator-5554' //This line is optional, only if you have few devices attached. Put your device id here
    }
  }
};

exports.config = conf;