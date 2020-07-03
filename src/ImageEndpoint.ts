import { NekoBot } from "./NekoBot";
import { ImageEndpointType } from "./Types";

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
     * @param {ImageEndpointType} type - The type of image to get. Current types: hass, hmidriff, pgif, 4k, hentai, holo, hneko, neko, hkitsune, kemonomimi, anal, hanal, gonewild, kanna, ass, pussy, thigh, hthigh, gah, coffee, food, paizuri, tentacle. Token required types: cosplay, swimsuit
     * @returns {(Promise<String | void>)} Image URL
     */
    public getImage(type: ImageEndpointType): Promise<String | void> {
        return new Promise((resolve, reject) => {
            this.client.request("image", {
                type
            })
                .then(res => resolve(res.body.message))
                .catch(reject);
        });
    }
}

export { ImageEndpoint };
