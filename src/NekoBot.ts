import request from "superagent";
import { version } from "../package.json";
import { ImageEndpoint } from "./ImageEndpoint";
import { ImageGeneration } from "./ImageGeneration";

/**
 * Creates an instance of NekoBot.
 * @class NekoBot
 * @param {String} [token]
 */
class NekoBot {
    public version: String;
    public baseURL: String;
    public token?: String;
    public request: request.SuperAgentStatic;
    constructor(token?: String) {
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
         * API Token (required for donator types in Image Endpoints)
         * @type {String}
         */
        this.token = token;
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
     * @returns {ImageEndpoint} ImageEndpoint class
     */
    public get imageEndpoint(): ImageEndpoint {
        return new ImageEndpoint(this);
    }
}

export { NekoBot };
