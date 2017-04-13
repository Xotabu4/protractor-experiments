import IStringValidator from "./IStringValidator"

export class ParseIntBasedZipCodeValidator implements IStringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && parseInt(s).toString() === s;
    }
}