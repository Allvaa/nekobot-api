import request from "superagent";
import ImageGeneration from "./ImageGeneration";
import { RandomImage, RandomImageType } from "./RandomImage";
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
    readonly imageGen: ImageGeneration;
    /**
     * @readonly
     * @returns {RandomImage} RandomImage class
     */
    readonly randomImage: RandomImage;
}
export { NekoBot, RandomImageType };
