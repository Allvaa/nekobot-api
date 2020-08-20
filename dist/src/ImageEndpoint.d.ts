import { NekoBot } from "./NekoBot";
import { ImageEndpointType } from "./Types";
/**
 * Creates an instance of ImageEndpoint.
 * @class ImageEndpoint
 */
declare class ImageEndpoint {
    client: NekoBot;
    /**
     * @constructor
     * @param {NekoBot} client
     */
    constructor(client: NekoBot);
    /**
     * @param {ImageEndpointType} type - The type of image to get. Current types: hass, hmidriff, pgif, 4k, hentai, holo, hneko, neko, hkitsune, kemonomimi, anal, hanal, gonewild, kanna, ass, pussy, thigh, hthigh, gah, coffee, food, paizuri, tentacle. Token required types: cosplay, swimsuit, pantsu
     * @returns {Promise<string>} Image URL
     */
    getImage(type: ImageEndpointType): Promise<string>;
}
export { ImageEndpoint };
