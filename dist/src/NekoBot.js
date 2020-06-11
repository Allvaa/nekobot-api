"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NekoBot = void 0;
const superagent_1 = __importDefault(require("superagent"));
const package_json_1 = require("../package.json");
const ImageEndpoint_1 = require("./ImageEndpoint");
const ImageGeneration_1 = require("./ImageGeneration");
/**
 * Creates an instance of NekoBot.
 * @class NekoBot
 */
class NekoBot {
    constructor() {
        /**
         * Lib version
         * @type {String}
         */
        this.version = package_json_1.version;
        /**
         * API URL
         * @type {String}
         */
        this.baseURL = "https://nekobot.xyz/api/";
        /**
         * Http client
         * @type {request.SuperAgentStatic}
         */
        this.request = superagent_1.default;
    }
    /**
     * @readonly
     * @returns {ImageGeneration} ImageGeneration class
     */
    get imageGen() {
        return new ImageGeneration_1.ImageGeneration(this);
    }
    /**
     * @readonly
     * @returns {ImageEndpoint} ImageEndpoint class
     */
    get imageEndpoint() {
        return new ImageEndpoint_1.ImageEndpoint(this);
    }
}
exports.NekoBot = NekoBot;
//# sourceMappingURL=NekoBot.js.map