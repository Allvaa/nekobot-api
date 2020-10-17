import { DDLCBackgroundList, DDLCBodyList, DDLCCharacterList, DonatorImageType, ImageType } from "../typings";
import Request from "../utils/Request";

export default interface NekoBot {
    /** @param queries.image an image url */
    generate(type: "animeface", queries: { image: string }): Promise<string>;
    /** @param queries.url an image to awooify */
    generate(type: "awooify", queries: { url: string }): Promise<string>;
    /** @param queries.url an image url */
    generate(type: "baguette", queries: { url: string }): Promise<string>;
    /** @param queries.image an image to blurpify */
    generate(type: "blurpify", queries: { image: string }): Promise<string>;
    /** 
     * @param queries.url an image url
     * @param queries.username user's username / any text
     */
    generate(type: "captcha", queries: { url: string; username: string }): Promise<string>;
    /** @param queries.text any text */
    generate(type: "changemymind", queries: { text: string }): Promise<string>;
    /** @param queries.text text to clydify */
    generate(type: "clyde", queries: { text: string }): Promise<string>;
    /** @param queries.face https://github.com/hibikidesu/NekoBot/blob/master/modules/fun.py#L14 line 13 to 34 */
    generate(type: "ddlc", queries: { character: DDLCCharacterList, background: DDLCBackgroundList, body: DDLCBodyList, face: string, text: string }): Promise<string>;
    /** @param queries.image image to deepfry */
    generate(type: "deepfry", queries: { image: string }): Promise<string>;
    /** @param queries.text any text */
    generate(type: "fact", queries: { text: string }): Promise<string>;
    /** @param queries.url an image url */
    generate(type: "iphonex", queries: { url: string }): Promise<string>;
    /** @param queries.url image to jpegify */
    generate(type: "jpeg", queries: { url: string }): Promise<string>;
    /** @param queries.text any text to kannaify */
    generate(type: "kannagen", queries: { text: string }): Promise<string>;
    /** @param queries.url an image url */
    generate(type: "lolice", queries: { url: string }): Promise<string>;
    /**
     * @param queries.image image to magikify
     * @param queries.intensity an integer of magik intensity from 0 to 10
     */
    generate(type: "magik", queries: { image: string, intensity?: number }): Promise<string>;
    /**
     * @param queries.image user's avatar
     * @param queries.text text to coment
     * @param queries.username user's username
     */
    generate(type: "phcomment", queries: { image: string, text: string, username: string }): Promise<string>;
    /**
     * @param queries.user1 user1's avatar
     * @param queries.user2 user2's avatar
     */
    generate(type: "ship", queries: { user1: string, user2: string }): Promise<string>;
    /** @param queries.url an image url */
    generate(type: "stickbug", queries: { url: string }): Promise<string>;
    /** @param queries.url an image url */
    generate(type: "threats", queries: { url: string }): Promise<string>;
    /**
     * @param queries.name user to trap
     * @param queries.author an user who traps the user
     * @param queries.image an image url
     */
    generate(type: "trap", queries: { name: string, author: string, image: string }): Promise<string>;
    /** @param queries.url an image url */
    generate(type: "trash", queries: { url: string }): Promise<string>;
    /** @param queries.text text to tweet */
    generate(type: "trumptweet", queries: { text: string }): Promise<string>;
    /**
     * @param queries.username user's username
     * @param queries.text text to tweet
     */
    generate(type: "tweet", queries: { username: string, text: string }): Promise<string>;
    /**
     * @param queries.user1 user1's avatar
     * @param queries.user2 user2's avatar
     */
    generate(type: "whowouldwin", queries: { user1: string, user2: string }): Promise<string>;
}; //eslint-disable-line

export default class NekoBot {
    public readonly baseURL = "https://nekobot.xyz/api";
    public readonly token?: string;
    private readonly request!: Request;

    public constructor(token?: string) {
        if (token) Object.defineProperty(this, "token", { value: token });
        Object.defineProperty(this, "request", { value: new Request(this) });
    }

    public generate(type: string, queries: Record<string, unknown>): Promise<string> {
        return new Promise((resolve, reject) => {
            this.request
                .get("imagegen", { queries: { ...queries, type } })
                .then(resolve)
                .catch(reject);
        });
    }

    public get(type: ImageType | DonatorImageType): Promise<string> {
        const headers: Record<string, string> = {};
        if (this.token) headers["Authorization"] = this.token;
        return new Promise((resolve, reject) => {
            this.request
                .get("image", { queries: { type }, headers })
                .then(resolve)
                .catch(reject);
        });
    }
}
