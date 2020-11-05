import { STATUS_CODES } from "http";

export default class NekoBotError extends Error {
    public status: string;
    public constructor(message: string, public statusCode: number) {
        super(message);
        this.name = "NekoBotError";
        this.status = STATUS_CODES[statusCode]!;
    }
}
