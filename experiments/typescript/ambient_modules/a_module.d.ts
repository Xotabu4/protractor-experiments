// Only ambient declarations are exist, no real module
declare module "fakemodule" {
    export function doError(err: string): boolean;
}