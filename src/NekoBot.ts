import request from "superagent"
import { version } from "../package.json"
import ImageGeneration from "./ImageGeneration"
import { RandomImage, RandomImageType } from "./RandomImage"

/**
 * @class NekoBot
 */
class NekoBot {
    public version: String
    public baseURL: String
    public request: request.SuperAgentStatic
    constructor() {
        this.version = version
        this.baseURL = "https://nekobot.xyz/api/"
        this.request = request
    }

    /**
     * @readonly
     * @returns {ImageGeneration} ImageGeneration class
     */
    public get imageGen(): ImageGeneration {
        return new ImageGeneration(this)
    }

    /**
     * @readonly
     * @returns {RandomImage} RandomImage class
     */
    public get randomImage(): RandomImage {
        return new RandomImage(this)
    }
}

export { NekoBot, RandomImageType }
