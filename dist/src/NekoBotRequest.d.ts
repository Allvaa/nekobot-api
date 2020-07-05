import { NekoBot } from "./NekoBot";
declare class NekoBotRequest {
    client: NekoBot;
    constructor(client: NekoBot);
    get(endpoint: string, options: {
        query?: any;
        headers?: any;
    }): Promise<unknown>;
}
export { NekoBotRequest };
