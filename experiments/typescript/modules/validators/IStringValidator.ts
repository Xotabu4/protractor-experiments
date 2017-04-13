export interface IStringValidator {
    isAcceptable(s: string): boolean
}
export default IStringValidator
// Cant export default interface lol https://github.com/Microsoft/TypeScript/issues/3792