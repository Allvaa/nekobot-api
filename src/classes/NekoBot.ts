export default class NekoBot {
    public readonly baseURL = "https://nekobot.xyz/api";
    public readonly token?: string;

    public constructor(token?: string) {
        if (token) Object.defineProperty(this, "token", { value: token });
    }
}
