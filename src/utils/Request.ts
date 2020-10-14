import NekoBot from "../classes/NekoBot";
import NekoBotError from "./Error";
import { request } from "https";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const pkg: { name: string; version: string; repository: { url: string } }= require("../../package.json");

export default class Request {
    public constructor(public readonly client: NekoBot) {}

    public get(endpoint: string, { queries, headers = {} }: { queries: Record<string, string>; headers?: Record<string, string> }): Promise<string> { 
        return new Promise((resolve, reject) => {
            this.
                _send("GET", endpoint, { queries, headers })
                .then(x => resolve(x.body.message))
                .catch(reject);
        });
    }

    private _send(method: string, endpoint: string, { queries, headers = {} }: { queries: Record<string, string>; headers?: Record<string, string> }): Promise<{ statusCode: number; body: any }> {
        return new Promise((resolve, reject) => {
            const req = request(
                `${this.client.baseURL}/${endpoint}?${this.encodeSearchParams(queries)}`, {
                    method,
                    headers: {
                        "content-type": "application/json",
                        "user-agent": `${pkg.name}/${pkg.version} (${pkg.repository.url})`,
                        ...headers
                    }
                }, response => {
                    let raw = "";
                    response
                        .on("data", chunk => {
                            raw += chunk;
                        })
                        .on("end", () => {
                            const res = {
                                statusCode: response.statusCode!,
                                body: JSON.parse(raw)
                            };
                            if (!(res.statusCode >= 200 && res.statusCode < 300)) {
                                reject(new NekoBotError(res.statusCode, res.body.message));
                            } else {
                                resolve(res);
                            }
                        })
                        .on("error", reject);
                });
            req.end();
        });
    }

    private encodeSearchParams(queries: Record<string, string>): string {
        return Object.entries(queries)
            .filter(x => Boolean(x[1]))
            .map(x => `${x[0]}=${encodeURIComponent(x[1])}`)
            .join("&");
    }
}
