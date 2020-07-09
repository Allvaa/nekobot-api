import { NekoBot } from "./NekoBot";
import https from "https";
import pkg from "../package.json";
import { NBRResponse } from "./Types";

/**
 * Creates an instance of NekoBotRequest.
 * @class NekoBotRequest
 */
class NekoBotRequest {
    client: NekoBot;

    /**
     * @constructor
     * @param {NekoBot} client
     */
    constructor(client: NekoBot) {
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
    get(
        endpoint: string,
        options: { query?: any; headers?: any }
    ): Promise<NBRResponse> {
        const urlq = [...Object.entries(options.query)]
            .filter((x) => Boolean(x[1]))
            .map((x) => `${x[0]}=${x[1]}`)
            .join("&");
        const opt: https.RequestOptions = {
            hostname: this.client.baseURL.replace(/(^\w+:|^)\/\//, ""),
            path: `/api/${endpoint}?${urlq}`,
            method: "GET",
            headers: {
                "content-type": "application/json",
                "user-agent": `${pkg.name}/${pkg.version} (${pkg.repository.url})`,
                ...options?.headers
            }
        };
        return new Promise((resolve, reject) => {
            let raw: Buffer;
            const req = https.request(opt, (res) => {
                res.on("data", (chunk) => {
                    raw = chunk;
                })
                    .on("end", () => {
                        if (
                            !(res.statusCode! >= 200 && res.statusCode! < 300)
                        ) {
                            reject(new Error(res.statusMessage));
                        } else {
                            resolve({
                                status: res.statusCode!,
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

    private parseJSON(stringJSON: string): any {
        try {
            return JSON.parse(stringJSON);
        } catch (e) {}
    }
}

export { NekoBotRequest };
