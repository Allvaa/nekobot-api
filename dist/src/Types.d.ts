/// <reference types="node" />
import { ClientRequest, IncomingMessage } from "http";
export declare type ImageEndpointType = "hass" | "hmidriff" | "pgif" | "4k" | "hentai" | "holo" | "hneko" | "neko" | "hkitsune" | "kemonomimi" | "anal" | "hanal" | "gonewild" | "kanna" | "ass" | "pussy" | "thigh" | "hthigh" | "gah" | "coffee" | "food" | "cosplay" | "paizuri" | "tentacle" | "swimsuit";
export declare type DDLCCharacterType = "monika" | "yuri" | "natsuki" | "sayori" | "m" | "y" | "n" | "s";
export declare type DDLCBackgroundType = "bedroom" | "class" | "closet" | "club" | "corridor" | "house" | "kitchen" | "residential" | "sayori_bedroom";
export declare type DDLCBodyType = "1" | "1b" | "2" | "2b";
export interface NBRResponse {
    status: number;
    headers: any;
    raw: Buffer;
    text: string;
    body: any;
    req: ClientRequest;
    res: IncomingMessage;
}
