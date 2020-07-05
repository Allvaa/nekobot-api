import { ImageEndpoint } from "./ImageEndpoint";
import { ImageGeneration } from "./ImageGeneration";
/**
 * Creates an instance of NekoBot.
 * @class NekoBot
 * @param {String} [token]
 */
declare class NekoBot {
    baseURL: string;
    token?: string;
    constructor(token?: string);
    /**
     * @readonly
     * @returns {String} Package version
     */
    get version(): string;
    /**
     * @readonly
     * @returns {ImageGeneration} ImageGeneration class
     */
    get imageGen(): ImageGeneration;
    /**
     * @readonly
     * @returns {ImageEndpoint} ImageEndpoint class
     */
    get imageEndpoint(): ImageEndpoint;
    /**
     * Function to send requests to the API.
     * @param {String} endpoint
     * @param {*} query
     */
    request(endpoint: string, query: any): Promise<any>;
    private get _request();
}
export { NekoBot };
