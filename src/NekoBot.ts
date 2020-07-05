import { version } from "../package.json";
import { ImageEndpoint } from "./ImageEndpoint";
import { ImageGeneration } from "./ImageGeneration";
import { NekoBotRequest } from "./NekoBotRequest";
const donatorTypes = ["cosplay", "swimsuit"];

/**
 * Creates an instance of NekoBot.
 * @class NekoBot
 * @param {String} [token]
 */
class NekoBot {
    public baseURL: string;
    public token?: string;
    constructor(token?: string) {
        /**
         * Base URL
         * @type {String}
         */
        this.baseURL = "https://nekobot.xyz";
        /**
         * API Token (required for donator types in Image Endpoints)
         * @type {String}
         */
        if (token) this.token = token;
    }

    /**
     * @readonly
     * @returns {String} Package version
     */
    public get version(): string {
        return version;
    }

    /**
     * @readonly
     * @returns {ImageGeneration} ImageGeneration class
     */
    public get imageGen(): ImageGeneration {
        return new ImageGeneration(this);
    }

    /**
     * @readonly
     * @returns {ImageEndpoint} ImageEndpoint class
     */
    public get imageEndpoint(): ImageEndpoint {
        return new ImageEndpoint(this);
    }

    /**
     * Function to send requests to the API.
     * @param {String} endpoint
     * @param {*} query
     */
    public request(endpoint: string, query: any): Promise<any> {
        const opt: any = {
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

    private get _request() {
        return new NekoBotRequest(this);
    }
}

export { NekoBot };
