import { NekoBot } from "./NekoBot";
import https from "https";
import pkg from "../package.json";
import { NBRResponse } from "./Types";
import { NekoBotError } from "./NekoBotError";
import { STATUS_CODES } from "http";

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
        { query, headers }: { query?: any; headers?: any }
    ): Promise<NBRResponse> {
        const urlq = [...Object.entries(query)]
            .filter((x) => Boolean(x[1]))
            .map((x) => `${x[0]}=${encodeURIComponent(x[1] as string)}`)
            .join("&");

        const opt: https.RequestOptions = {
            hostname: this.client.baseURL.replace(/(^\w+:|^)\/\//, ""),
            path: `/api/${endpoint}?${urlq}`,
            method: "GET",
            headers: {
                "content-type": "application/json",
                "user-agent": `${pkg.name}/${pkg.version} (${pkg.repository.url})`,
                ...headers
            }
        };

        return new Promise((resolve, reject) => {
            let raw: Buffer;
            const req = https.request(opt, (res) => {
                res.on("data", (chunk) => {
                    raw = chunk;
                })
                    .on("end", () => {
                        const response = {
                            status: res.statusCode!,
                            headers: res.headers,
                            raw,
                            body: this.parseJSON(raw.toString()) || {}
                        };
                        if (
                            !(res.statusCode! >= 200 && res.statusCode! < 300)
                        ) {
                            reject(
                                new NekoBotError(
                                    STATUS_CODES[res.statusCode!]!,
                                    {
                                        reason: response.body.message,
                                        statusCode: res.statusCode!
                                    }
                                )
                            );
                        } else {
                            resolve(response);
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
