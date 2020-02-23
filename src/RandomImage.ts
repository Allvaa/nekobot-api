import { NekoBot } from "./NekoBot";
type RandomImageType =
    | "hass"
    | "hmidriff"
    | "pgif"
    | "4k"
    | "hentai"
    | "holo"
    | "hneko"
    | "neko"
    | "hkitsune"
    | "kemonomimi"
    | "anal"
    | "hanal"
    | "gonewild"
    | "kanna"
    | "ass"
    | "pussy"
    | "thigh"
    | "hthigh"
    | "gah"
    | "coffee"
    | "food";

/**
 * @class RandomImage
 */
class RandomImage {
    public client: NekoBot;

    /**
     * Creates an instance of RandomImage.
     * @param {NekoBot} client
     */
    constructor(client: NekoBot) {
        this.client = client;
    }

    /**
     * @param {RandomImageType} type
     * @returns {(Promise<String | void>)}
     */
    public async getImage(type: RandomImageType): Promise<String | void> {
        try {
            const { body } = await this.client.request
                .get(`${this.client.baseURL}image`)
                .query({
                    type,
                });
            return body.message;
        } catch (err) {
            if (err.message === "Bad Request") {
                throw Error("Make sure the parameter(s) is correct!");
            }
        }
    }
}

export { RandomImage, RandomImageType };
