import { ImageEndpoint } from "./ImageEndpoint";
import { ImageGeneration } from "./ImageGeneration";
/**
 * Creates an instance of NekoBot.
 * @class NekoBot
 * @param {String} [token]
 */
declare class NekoBot {
    version: String;
    baseURL: String;
    token?: String;
    constructor(token?: String);
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
     * @param {String} endpoint
     * @param {*} query
     */
    request(endpoint: string, query: any): Promise<any>;
    private get _request();
}
export { NekoBot };
