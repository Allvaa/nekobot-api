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
     * Package version
     * @readonly
     * @returns {String}
     */
    get version(): string;
    /**
     * ImageGeneration class
     * @readonly
     * @returns {ImageGeneration}
     */
    get imageGen(): ImageGeneration;
    /**
     * ImageEndpoint class
     * @readonly
     * @returns {ImageEndpoint}
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
