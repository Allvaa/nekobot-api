import { STATUS_CODES } from "http";

export default class NekoBotError extends Error {
    public constructor(public statusCode: number, public reason: string) {
        super(STATUS_CODES[statusCode]);
        this.name = "NekoBotError";
    }
}
