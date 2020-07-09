export type ImageEndpointType =
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
    | "food"
    | "cosplay"
    | "paizuri"
    | "tentacle"
    | "swimsuit";

export type DDLCCharacterType =
    | "monika"
    | "yuri"
    | "natsuki"
    | "sayori"
    | "m"
    | "y"
    | "n"
    | "s";

export type DDLCBackgroundType =
    | "bedroom"
    | "class"
    | "closet"
    | "club"
    | "corridor"
    | "house"
    | "kitchen"
    | "residential"
    | "sayori_bedroom";

export type DDLCBodyType = "1" | "1b" | "2" | "2b";

export interface NBRResponse {
    status: number;
    headers: any;
    raw: Buffer;
    body: any;
}
