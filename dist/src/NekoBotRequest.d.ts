import { NekoBot } from "./NekoBot";
import { NBRResponse } from "./Types";
declare class NekoBotRequest {
    client: NekoBot;
    constructor(client: NekoBot);
    get(endpoint: string, options: {
        query?: any;
        headers?: any;
    }): Promise<NBRResponse>;
}
export { NekoBotRequest };
