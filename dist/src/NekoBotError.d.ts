declare class NekoBotError extends Error {
    statusCode?: number;
    reason?: string;
    constructor(message: string, { reason, statusCode }: {
        reason: string;
        statusCode: number;
    });
}
export { NekoBotError };
