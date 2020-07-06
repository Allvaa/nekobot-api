import { NekoBot } from "./NekoBot";
import https from "https";
import pkg from "../package.json";
import { NBRResponse } from "./Types";

class NekoBotRequest {
    client: NekoBot;
    constructor(client: NekoBot) {
        this.client = client;
    }

    get(endpoint: string, options: { query?: any, headers?: any }): Promise<NBRResponse> {
        const opt: https.RequestOptions = {
            hostname: this.client.baseURL.replace(/(^\w+:|^)\/\//, ""),
            path: `/api/${endpoint}?${new URLSearchParams(options?.query).toString()}`,
            method: "GET",
            headers: {
                "content-type": "application/json",
                "user-agent": `${pkg.name}/${pkg.version} (${pkg.repository.url})`,
                ...options?.headers
            }
        };
        return new Promise((resolve, reject) => {
            let raw: Buffer;
            const req = https.request(opt, res => {
                res
                    .on("data", chunk => {
                        raw = chunk;
                    })
                    .on("end", () => {
                        if (!(res.statusCode! >= 200 && res.statusCode! < 300)) {
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

    parseJSON(stringJSON: string): any {
        try {
            return JSON.parse(stringJSON);
        } catch (e) {}
    }
}

export { NekoBotRequest };
