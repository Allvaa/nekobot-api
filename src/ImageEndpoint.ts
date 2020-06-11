import { NekoBot } from "./NekoBot";
import { ImageEndpointType } from "./@types/index";

/**
 * Creates an instance of ImageEndpoint.
 * @class ImageEndpoint
 * @param {NekoBot} client
 */
class ImageEndpoint {
    public client: NekoBot;
    constructor(client: NekoBot) {
        this.client = client;
    }

    /**
     * @param {ImageEndpointType} type - The type of image to get. Current types: hass, hmidriff, pgif, 4k, hentai, holo, hneko, neko, hkitsune, kemonomimi, anal, hanal, gonewild, kanna, ass, pussy, thigh, hthigh, gah, coffee, food, cosplay.
     * @returns {(Promise<String | void>)} Image URL
     */
    public async getImage(type: ImageEndpointType): Promise<String | void> {
        try {
            const { body } = await this.client.request
                .get(`${this.client.baseURL}image`)
                .query({
                    type
                });
            return body.message;
        } catch (err) {
            if (err.message === "Bad Request") {
                throw Error("Make sure the parameter(s) is correct!");
            }
        }
    }
}

export { ImageEndpoint };
