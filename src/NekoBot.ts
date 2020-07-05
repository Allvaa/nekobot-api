import superagent from "superagent";
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
    public version: String;
    public baseURL: String;
    public token?: String;
    constructor(token?: String) {
        /**
         * Lib version
         * @type {String}
         */
        this.version = version;
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
