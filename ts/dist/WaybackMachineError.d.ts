import { Context } from './Context';
declare class WaybackMachineError extends Error {
    isWaybackMachineError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { WaybackMachineError };
