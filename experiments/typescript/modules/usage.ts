import * as validators from "./validators"

// module that does some side effects on export - sets global variable
import "./global_modifying_module.js";
console.log((global as any).SOME_GLOBAL_VARIABLE)

// testing
const zip_acceptable = new validators.ZipCodeValidator().isAcceptable('12345')
console.log('ZIP_ACCEPTABLE', zip_acceptable)
