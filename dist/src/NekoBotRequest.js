"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NekoBotRequest = void 0;
const https_1 = __importDefault(require("https"));
const package_json_1 = __importDefault(require("../package.json"));
const NekoBotError_1 = require("./NekoBotError");
const http_1 = require("http");
/**
 * Creates an instance of NekoBotRequest.
 * @class NekoBotRequest
 */
class NekoBotRequest {
    /**
     * @constructor
     * @param {NekoBot} client
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Send GET request.
     * @param {string} endpoint
     * @param {Object} options
     * @param {*} options.query
     * @param {*} options.headers
     * @returns {Promise<NBRResponse>}
     */
    get(endpoint, { query, headers }) {
        const urlq = [...Object.entries(query)]
            .filter((x) => Boolean(x[1]))
            .map((x) => `${x[0]}=${encodeURIComponent(x[1])}`)
            .join("&");
        const opt = {
            hostname: this.client.baseURL.replace(/(^\w+:|^)\/\//, ""),
            path: `/api/${endpoint}?${urlq}`,
            method: "GET",
            headers: Object.assign({ "content-type": "application/json", "user-agent": `${package_json_1.default.name}/${package_json_1.default.version} (${package_json_1.default.repository.url})` }, headers)
        };
        return new Promise((resolve, reject) => {
            let raw;
            const req = https_1.default.request(opt, (res) => {
                res.on("data", (chunk) => {
                    raw = chunk;
                })
                    .on("end", () => {
                    const response = {
                        status: res.statusCode,
                        headers: res.headers,
                        raw,
                        body: this.parseJSON(raw.toString()) || {}
                    };
                    if (!(res.statusCode >= 200 && res.statusCode < 300)) {
                        reject(new NekoBotError_1.NekoBotError(http_1.STATUS_CODES[res.statusCode], {
                            reason: response.body.message,
                            statusCode: res.statusCode
                        }));
                    }
                    else {
                        resolve(response);
                    }
                })
                    .on("error", reject);
            });
            req.end();
        });
    }
    parseJSON(stringJSON) {
        try {
            return JSON.parse(stringJSON);
        }
        catch (e) { }
    }
}
exports.NekoBotRequest = NekoBotRequest;
//# sourceMappingURL=NekoBotRequest.js.map