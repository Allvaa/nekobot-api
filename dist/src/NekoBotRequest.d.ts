import { NekoBot } from "./NekoBot";
import { NBRResponse } from "./Types";
/**
 * Creates an instance of NekoBotRequest.
 * @class NekoBotRequest
 */
declare class NekoBotRequest {
    client: NekoBot;
    /**
     * @constructor
     * @param {NekoBot} client
     */
    constructor(client: NekoBot);
    /**
     * Send GET request.
     * @param {string} endpoint
     * @param {Object} options
     * @param {*} options.query
     * @param {*} options.headers
     * @returns {Promise<NBRResponse>}
     */
    get(endpoint: string, { query, headers }: {
        query?: any;
        headers?: any;
    }): Promise<NBRResponse>;
    private parseJSON;
}
export { NekoBotRequest };
