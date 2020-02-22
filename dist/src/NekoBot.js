"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const superagent_1 = __importDefault(require("superagent"));
const package_json_1 = require("../package.json");
const ImageGeneration_1 = __importDefault(require("./ImageGeneration"));
/**
 * @class NekoBot
 */
class NekoBot {
    constructor() {
        this.version = package_json_1.version;
        this.baseURL = "https://nekobot.xyz/api/";
        this.request = superagent_1.default;
    }
    /**
     * @readonly
     * @returns {ImageGeneration} ImageGeneration class
     */
    get imageGen() {
        return new ImageGeneration_1.default(this);
    }
}
exports.default = NekoBot;
//# sourceMappingURL=NekoBot.js.map