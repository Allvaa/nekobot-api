import { ImageEndpoint } from "./ImageEndpoint";
import { ImageGeneration } from "./ImageGeneration";
import { NBRResponse } from "./Types";
/**
 * Creates an instance of NekoBot.
 * @class NekoBot
 */
declare class NekoBot {
    baseURL: string;
    token?: string;
    /**
     * @constructor
     * @param {string} [token]
     */
    constructor(token?: string);
    /**
     * Package version
     * @readonly
     * @returns {string}
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
     * @param {string} endpoint
     * @param {*} query
     * @returns {Promise<NBRResponse>}
     */
    request(endpoint: string, query: any): Promise<NBRResponse>;
    /**
     * @private
     * @readonly
     * @returns {NekoBotRequest}
     */
    private get _request();
}
export { NekoBot };
