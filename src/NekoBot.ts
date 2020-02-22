import request from "superagent";
import { version } from "../package.json";
import ImageGeneration from "./ImageGeneration";

/**
 * @class NekoBot
 */
class NekoBot {
    public version: String;
    public baseURL: String;
    public request: request.SuperAgentStatic;
    constructor() {
        this.version = version;
        this.baseURL = "https://nekobot.xyz/api/";
        this.request = request;
    }

    /**
     * @readonly
     * @returns {ImageGeneration} ImageGeneration class
     */
    public get imageGen() {
        return new ImageGeneration(this);
    }
}
export default NekoBot;