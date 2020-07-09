"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NekoBotError = void 0;
class NekoBotError extends Error {
    constructor(message, { reason, statusCode }) {
        super(message);
        this.name = "NekoBotError";
        this.statusCode = statusCode;
        this.reason = reason;
    }
}
exports.NekoBotError = NekoBotError;
//# sourceMappingURL=NekoBotError.js.map