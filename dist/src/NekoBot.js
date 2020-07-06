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
 */
class NekoBot {
    /**
     * @constructor
     * @param {string} [token]
     */
    constructor(token) {
        /**
         * Base URL
         * @type {string}
         */
        this.baseURL = "https://nekobot.xyz";
        /**
         * API Token (required for donator types in Image Endpoints)
         * @type {string}
         */
        this.token;
        if (token)
            this.token = token;
    }
    /**
     * Package version
     * @readonly
     * @returns {string}
     */
    get version() {
        return package_json_1.version;
    }
    /**
     * ImageGeneration class
     * @readonly
     * @returns {ImageGeneration}
     */
    get imageGen() {
        return new ImageGeneration_1.ImageGeneration(this);
    }
    /**
     * ImageEndpoint class
     * @readonly
     * @returns {ImageEndpoint}
     */
    get imageEndpoint() {
        return new ImageEndpoint_1.ImageEndpoint(this);
    }
    /**
     * Function to send requests to the API.
     * @param {string} endpoint
     * @param {*} query
     * @returns {Promise<NBRResponse>}
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
    /**
     * @private
     * @readonly
     * @returns {NekoBotRequest}
     */
    get _request() {
        return new NekoBotRequest_1.NekoBotRequest(this);
    }
}
exports.NekoBot = NekoBot;
//# sourceMappingURL=NekoBot.js.map