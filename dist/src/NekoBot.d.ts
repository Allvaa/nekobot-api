import request from "superagent";
import ImageGeneration from "./ImageGeneration";
/**
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
    readonly imageGen: ImageGeneration;
}
export default NekoBot;
