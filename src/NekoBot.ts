import { version } from "../package.json";
import { ImageEndpoint } from "./ImageEndpoint";
import { ImageGeneration } from "./ImageGeneration";
import { NekoBotRequest } from "./NekoBotRequest";
import { NBRResponse } from "./Types";
const donatorTypes = ["cosplay", "swimsuit"];

/**
 * Creates an instance of NekoBot.
 * @class NekoBot
 */
class NekoBot {
    public baseURL: string;
    public token?: string;

    /**
     * @constructor
     * @param {string} [token]
     */
    constructor(token?: string) {
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
        if (token) this.token = token;
    }

    /**
     * Package version
     * @readonly
     * @returns {string}
     */
    public get version(): string {
        return version;
    }

    /**
     * ImageGeneration class
     * @readonly
     * @returns {ImageGeneration}
     */
    public get imageGen(): ImageGeneration {
        return new ImageGeneration(this);
    }

    /**
     * ImageEndpoint class
     * @readonly
     * @returns {ImageEndpoint}
     */
    public get imageEndpoint(): ImageEndpoint {
        return new ImageEndpoint(this);
    }

    /**
     * Function to send requests to the API.
     * @param {string} endpoint
     * @param {*} query
     * @returns {Promise<NBRResponse>}
     */
    public request(endpoint: string, query: any): Promise<NBRResponse> {
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

    /**
     * @private
     * @readonly
     * @returns {NekoBotRequest}
     */
    private get _request(): NekoBotRequest {
        return new NekoBotRequest(this);
    }
}

export { NekoBot };
