class NekoBotError extends Error {
    statusCode?: number;
    reason?: string;
    constructor(
        message: string,
        { reason, statusCode }: { reason: string; statusCode: number }
    ) {
        super(message);
        this.name = "NekoBotError";
        this.statusCode = statusCode;
        this.reason = reason;
    }
}

export { NekoBotError };
