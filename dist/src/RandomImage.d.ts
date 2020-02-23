import { NekoBot } from "./NekoBot";
declare type RandomImageType = "hass" | "hmidriff" | "pgif" | "4k" | "hentai" | "holo" | "hneko" | "neko" | "hkitsune" | "kemonomimi" | "anal" | "hanal" | "gonewild" | "kanna" | "ass" | "pussy" | "thigh" | "hthigh" | "gah" | "coffee" | "food";
/**
 * @class RandomImage
 */
declare class RandomImage {
    client: NekoBot;
    /**
     * Creates an instance of RandomImage.
     * @param {NekoBot} client
     */
    constructor(client: NekoBot);
    /**
     * @param {RandomImageType} type - The type of image to get. Current types: hass, hmidriff, pgif, 4k, hentai, holo, hneko, neko, hkitsune, kemonomimi, anal, hanal, gonewild, kanna, ass, pussy, thigh, hthigh, gah, coffee, food
     * @returns {(Promise<String | void>)} Image URL
     */
    getImage(type: RandomImageType): Promise<String | void>;
}
export { RandomImage, RandomImageType };
