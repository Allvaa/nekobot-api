import request from "superagent";
import { version } from "../package.json";
import ImageGeneration from "./ImageGeneration";
import { RandomImage, RandomImageType } from "./RandomImage";

/**
 * Creates an instance of NekoBot.
 * @class NekoBot
 */
class NekoBot {
    public version: String;
    public baseURL: String;
    public request: request.SuperAgentStatic;
    constructor() {
        /**
         * Lib version
         * @type {String}
         */
        this.version = version;
        /**
         * API URL
         * @type {String}
         */
        this.baseURL = "https://nekobot.xyz/api/";
        /**
         * Http client
         * @type {request.SuperAgentStatic}
         */
        this.request = request;
    }

    /**
     * @readonly
     * @returns {ImageGeneration} ImageGeneration class
     */
    public get imageGen(): ImageGeneration {
        return new ImageGeneration(this);
    }

    /**
     * @readonly
     * @returns {RandomImage} RandomImage class
     */
    public get randomImage(): RandomImage {
        return new RandomImage(this);
    }
}

export { NekoBot, RandomImageType };
