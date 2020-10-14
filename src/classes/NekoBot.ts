import { DDLCBackgroundList, DDLCBodyList, DDLCCharacterList, DonatorImageType, ImageType } from "../typings";
import Request from "../utils/Request";

export default interface NekoBot {
    generate(type: "animeface", queries: { image: string }): Promise<string>;
    generate(type: "awooify", queries: { url: string }): Promise<string>;
    generate(type: "baguette", queries: { url: string }): Promise<string>;
    generate(type: "blurpify", queries: { image: string }): Promise<string>;
    generate(type: "captcha", queries: { url: string; username: string }): Promise<string>;
    generate(type: "changemymind", queries: { text: string }): Promise<string>;
    generate(type: "clyde", queries: { text: string }): Promise<string>;
    generate(type: "ddlc", queries: { character: DDLCCharacterList, background: DDLCBackgroundList, body: DDLCBodyList, face: string, text: string }): Promise<string>;
    generate(type: "deepfry", queries: { image: string }): Promise<string>;
    generate(type: "fact", queries: { text: string }): Promise<string>;
    generate(type: "iphonex", queries: { url: string }): Promise<string>;
    generate(type: "jpeg", queries: { url: string }): Promise<string>;
    generate(type: "kannagen", queries: { text: string }): Promise<string>;
    generate(type: "lolice", queries: { url: string }): Promise<string>;
    generate(type: "magik", queries: { image: string, intensity?: number }): Promise<string>;
    generate(type: "phcomment", queries: { image: string, text: string, username: string }): Promise<string>;
    generate(type: "ship", queries: { user1: string, user2: string }): Promise<string>;
    generate(type: "stickbug", queries: { url: string }): Promise<string>;
    generate(type: "threats", queries: { url: string }): Promise<string>;
    generate(type: "trap", queries: { name: string, author: string, image: string }): Promise<string>;
    generate(type: "trash", queries: { url: string }): Promise<string>;
    generate(type: "trumptweet", queries: { text: string }): Promise<string>;
    generate(type: "tweet", queries: { username: string, text: string }): Promise<string>;
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
