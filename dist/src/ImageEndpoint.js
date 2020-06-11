"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageEndpoint = void 0;
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
     * @param {ImageEndpointType} type - The type of image to get. Current types: hass, hmidriff, pgif, 4k, hentai, holo, hneko, neko, hkitsune, kemonomimi, anal, hanal, gonewild, kanna, ass, pussy, thigh, hthigh, gah, coffee, food
     * @returns {(Promise<String | void>)} Image URL
     */
    getImage(type) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { body } = yield this.client.request
                    .get(`${this.client.baseURL}image`)
                    .query({
                    type
                });
                return body.message;
            }
            catch (err) {
                if (err.message === "Bad Request") {
                    throw Error("Make sure the parameter(s) is correct!");
                }
            }
        });
    }
}
exports.ImageEndpoint = ImageEndpoint;
//# sourceMappingURL=ImageEndpoint.js.map