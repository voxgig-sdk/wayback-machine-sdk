"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WaybackMachineError = void 0;
class WaybackMachineError extends Error {
    isWaybackMachineError = true;
    sdk = 'WaybackMachine';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.WaybackMachineError = WaybackMachineError;
//# sourceMappingURL=WaybackMachineError.js.map