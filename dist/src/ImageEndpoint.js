"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageEndpoint = void 0;
const donatorTypes = ["cosplay", "swimsuit"];
/**
 * Creates an instance of ImageEndpoint.
 * @class ImageEndpoint
 * @param {NekoBot} client
 */
class ImageEndpoint {
    constructor(client) {
        this.client = client;
    }
    /**
     * @param {ImageEndpointType} type - The type of image to get. Current types: hass, hmidriff, pgif, 4k, hentai, holo, hneko, neko, hkitsune, kemonomimi, anal, hanal, gonewild, kanna, ass, pussy, thigh, hthigh, gah, coffee, food, paizuri, tentacle. Token required types: cosplay, swimsuit
     * @returns {(Promise<String | void>)} Image URL
     */
    getImage(type) {
        return new Promise((resolve, reject) => {
            this.client.request("image", {
                type
            })
                .then(res => resolve(res.body.message))
                .catch(reject);
        });
    }
}
exports.ImageEndpoint = ImageEndpoint;
//# sourceMappingURL=ImageEndpoint.js.map