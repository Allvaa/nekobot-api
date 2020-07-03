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
const donatorTypes = ["cosplay", "swimsuit"];
/**
 * Creates an instance of NekoBot.
 * @class NekoBot
 * @param {String} [token]
 */
class NekoBot {
    constructor(token) {
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
         * API Token (required for donator types in Image Endpoints)
         * @type {String}
         */
        this.token = token;
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
    /**
     * @param {String} endpoint
     * @param {*} query
     */
    request(endpoint, query) {
        return new Promise((resolve, reject) => {
            const req = superagent_1.default
                .get(`${this.baseURL}${endpoint}`)
                .query(query);
            if (endpoint === "image" && this.token && donatorTypes.includes(query.type)) {
                req.set("Authorization", this.token);
            }
            req
                .then(resolve)
                .catch(reject);
        });
    }
}
exports.NekoBot = NekoBot;
//# sourceMappingURL=NekoBot.js.map