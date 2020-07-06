"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NekoBotRequest = void 0;
const https_1 = __importDefault(require("https"));
const package_json_1 = __importDefault(require("../package.json"));
class NekoBotRequest {
    constructor(client) {
        this.client = client;
    }
    get(endpoint, options) {
        const opt = {
            hostname: this.client.baseURL.replace(/(^\w+:|^)\/\//, ""),
            path: `/api/${endpoint}?${new URLSearchParams(options === null || options === void 0 ? void 0 : options.query).toString()}`,
            method: "GET",
            headers: Object.assign({ "content-type": "application/json", "user-agent": `${package_json_1.default.name}/${package_json_1.default.version} (${package_json_1.default.repository.url})` }, options === null || options === void 0 ? void 0 : options.headers)
        };
        return new Promise((resolve, reject) => {
            let raw;
            const req = https_1.default.request(opt, res => {
                res
                    .on("data", chunk => {
                    raw = chunk;
                })
                    .on("end", () => {
                    if (!(res.statusCode >= 200 && res.statusCode < 300)) {
                        reject(new Error(res.statusMessage));
                    }
                    else {
                        resolve({
                            status: res.statusCode,
                            headers: res.headers,
                            raw,
                            body: this.parseJSON(raw.toString()) || {}
                        });
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