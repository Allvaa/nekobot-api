"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NekoBot = void 0;
const package_json_1 = require("../package.json");
const ImageEndpoint_1 = require("./ImageEndpoint");
const ImageGeneration_1 = require("./ImageGeneration");
const NekoBotRequest_1 = require("./NekoBotRequest");
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
        this.baseURL = "nekobot.xyz";
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
        const opt = {
            query,
            headers: {}
        };
        if (endpoint === "image" && this.token && donatorTypes.includes(query.type)) {
            opt.headers["Authorization"] = this.token; // eslint-disable-line
        }
        return new Promise((resolve, reject) => {
            this._request.get(endpoint, opt)
                .then(resolve)
                .catch(reject);
        });
    }
    get _request() {
        return new NekoBotRequest_1.NekoBotRequest(this);
    }
}
exports.NekoBot = NekoBot;
//# sourceMappingURL=NekoBot.js.map