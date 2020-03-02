import request from "superagent";
import { ImageEndpoint, ImageEndpointType } from "./ImageEndpoint";
import { ImageGeneration } from "./ImageGeneration";
/**
 * Creates an instance of NekoBot.
 * @class NekoBot
 */
declare class NekoBot {
    version: String;
    baseURL: String;
    request: request.SuperAgentStatic;
    constructor();
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
}
export { NekoBot, ImageEndpointType };
