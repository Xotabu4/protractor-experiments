/// <reference path="a_module.d.ts"/>

// import 1
import { doError as doError1} from 'fakemodule'
doError1('Real function does not exist, only ambient')

// // import 2
import fakemodule = require("fakemodule");
fakemodule.doError('Real function does not exist, only ambient')
