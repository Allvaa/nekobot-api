"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @class ImageGeneration
 */
class ImageGeneration {
    /**
     * Creates an instance of ImageGeneration.
     * @param {NekoBot} client
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Threats Image
     * @param {String} url - Image URL to add to template.
     * @returns {Promise<String | void>} The image URL
     */
    threats(url) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { body } = yield this.client.request.get(`${this.client.baseURL}imagegen`)
                    .query({
                    type: "threats",
                    url
                });
                return body.message;
            }
            catch (err) {
                if (err.message === "Bad Request") {
                    throw Error("Make sure the parameter(s) is correct!");
                }
            }
        });
    }
    /**
     * Baguette Image
     * @param {String} url - Any image URL to generate, can be user avatar or anything.
     * @returns {Promise<String | void>} The image URL
     */
    baguette(url) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { body } = yield this.client.request.get(`${this.client.baseURL}imagegen`)
                    .query({
                    type: "baguette",
                    url
                });
                return body.message;
            }
            catch (err) {
                if (err.message === "Bad Request") {
                    throw Error("Make sure the parameter(s) is correct!");
                }
            }
        });
    }
    /**
     * Clyde Image
     * @param {String} text - Text to clydify.
     * @returns {Promise<String | void>} The image URL
     */
    clyde(text) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { body } = yield this.client.request.get(`${this.client.baseURL}imagegen`)
                    .query({
                    type: "clyde",
                    text
                });
                return body.message;
            }
            catch (err) {
                if (err.message === "Bad Request") {
                    throw Error("Make sure the parameter(s) is correct!");
                }
            }
        });
    }
    /**
     * Ship Image
     * @param {String} user1 - User 1’s avatar
     * @param {String} user2 - User 2’s avatar
     * @returns {Promise<String | void>} The image URL
     */
    ship(user1, user2) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { body } = yield this.client.request.get(`${this.client.baseURL}imagegen`)
                    .query({
                    type: "ship",
                    user1,
                    user2
                });
                return body.message;
            }
            catch (err) {
                if (err.message === "Bad Request") {
                    throw Error("Make sure the parameter(s) is correct!");
                }
            }
        });
    }
    /**
     * Captcha Image
     * @param {String} url - User’s avatar URL or any image.
     * @param {String} username - User’s username or or any other string to show up.
     * @returns {Promise<String | void>} The image URL
     */
    captcha(url, username) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { body } = yield this.client.request.get(`${this.client.baseURL}imagegen`)
                    .query({
                    type: "captcha",
                    url,
                    username
                });
                return body.message;
            }
            catch (err) {
                if (err.message === "Bad Request") {
                    throw Error("Make sure the parameter(s) is correct!");
                }
            }
        });
    }
    /**
     * WhoWouldWin Image
     * @param {String} user1 - User 1’s avatar
     * @param {String} user2 - User 2’s avatar
     * @returns {Promise<String | void>} The image URL
     */
    whoWouldWin(user1, user2) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { body } = yield this.client.request.get(`${this.client.baseURL}imagegen`)
                    .query({
                    type: "whowouldwin",
                    user1,
                    user2
                });
                return body.message;
            }
            catch (err) {
                if (err.message === "Bad Request") {
                    throw Error("Make sure the parameter(s) is correct!");
                }
            }
        });
    }
    /**
     * ChangeMyMind Image
     * @param {String} text - Change my mind text.
     * @returns {Promise<String | void>} The image URL
     */
    changemMyMind(text) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { body } = yield this.client.request.get(`${this.client.baseURL}imagegen`)
                    .query({
                    type: "changemymind",
                    text
                });
                return body.message;
            }
            catch (err) {
                if (err.message === "Bad Request") {
                    throw Error("Make sure the parameter(s) is correct!");
                }
            }
        });
    }
    /**
     * DDLC Image
     * @param {String} character - Can be either monika, yuri, natsuki, sayori or m, y, n, s
     * @param {String} background - Background of the image, types: bedroom, class, closet, club, corridor, house, kitchen, residential, sayori_bedroom
     * @param {String} body - Body of the character, there is only 1 or 2 for monika and 1, 1b, 2, 2b for the rest
     * @param {String} face - Face of the character to go with the body, is best to just see all the types at https://github.com/ReKTDevlol/NekoBot/blob/master/modules/fun.py#L14 (line14 to 34)
     * @param {String} text - Text for the character to say, max length of 140
     * @returns {Promise<String | void>} The image URL
     */
    ddlc(character, background, body, face, text) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { body: b } = yield this.client.request.get(`${this.client.baseURL}imagegen`)
                    .query({
                    type: "ddlc",
                    character,
                    background,
                    body,
                    face,
                    text
                });
                return b.message;
            }
            catch (err) {
                if (err.message === "Bad Request") {
                    throw Error("Make sure the parameter(s) is correct!");
                }
            }
        });
    }
    /**
     * JPEG Image
     * @param {String} url - URL to JPEGify, would be recommended if the URL is as an JPEG or JPG format but PNG will still work :^)
     * @returns {Promise<String | void>} The image URL
     */
    jpeg(url) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { body } = yield this.client.request.get(`${this.client.baseURL}imagegen`)
                    .query({
                    type: "jpeg",
                    url
                });
                return body.message;
            }
            catch (err) {
                if (err.message === "Bad Request") {
                    throw Error("Make sure the parameter(s) is correct!");
                }
            }
        });
    }
    /**
     * Lolice Image
     * @param {String} url - Lolice chief
     * @returns {Promise<String | void>} The image URL
     */
    lolice(url) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { body } = yield this.client.request.get(`${this.client.baseURL}imagegen`)
                    .query({
                    type: "lolice",
                    url
                });
                return body.message;
            }
            catch (err) {
                if (err.message === "Bad Request") {
                    throw Error("Make sure the parameter(s) is correct!");
                }
            }
        });
    }
    /**
     * Kannagen Image
     * @param {String} text - text to kannafy
     * @returns {Promise<String | void>} The image URL
     */
    kannagen(text) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { body } = yield this.client.request.get(`${this.client.baseURL}imagegen`)
                    .query({
                    type: "kannagen",
                    text
                });
                return body.message;
            }
            catch (err) {
                if (err.message === "Bad Request") {
                    throw Error("Make sure the parameter(s) is correct!");
                }
            }
        });
    }
    /**
     * IPhoneX Image
     * @param {String} url - Image to fill into an iphone.
     * @returns {Promise<String | void>} The image URL
     */
    iphoneX(url) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { body } = yield this.client.request.get(`${this.client.baseURL}imagegen`)
                    .query({
                    type: "iphonex",
                    url
                });
                return body.message;
            }
            catch (err) {
                if (err.message === "Bad Request") {
                    throw Error("Make sure the parameter(s) is correct!");
                }
            }
        });
    }
    /**
     * AnimeFace Image
     * @param {String} image - Image to find heccin weaboos
     * @returns {Promise<String | void>} The image URL
     */
    animeFace(image) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { body } = yield this.client.request.get(`${this.client.baseURL}imagegen`)
                    .query({
                    type: "animeface",
                    image
                });
                return body.message;
            }
            catch (err) {
                if (err.message === "Bad Request") {
                    throw Error("Make sure the parameter(s) is correct!");
                }
            }
        });
    }
    /**
     * Awooify Image
     * @param {String} url - Users avatar to AwOOOOify :3
     * @returns {Promise<String | void>} The image URL
     */
    awooify(url) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { body } = yield this.client.request.get(`${this.client.baseURL}imagegen`)
                    .query({
                    type: "awooify",
                    url
                });
                return body.message;
            }
            catch (err) {
                if (err.message === "Bad Request") {
                    throw Error("Make sure the parameter(s) is correct!");
                }
            }
        });
    }
    /**
     * TrumpTweet Image
     * @param {String} text - Text to TrumpTweet
     * @returns {Promise<String | void>} The image URL
     */
    trumpTweet(text) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { body } = yield this.client.request.get(`${this.client.baseURL}imagegen`)
                    .query({
                    type: "trumptweet",
                    text
                });
                return body.message;
            }
            catch (err) {
                if (err.message === "Bad Request") {
                    throw Error("Make sure the parameter(s) is correct!");
                }
            }
        });
    }
    /**
     * Tweet Image
     * @param {String} username - Twitter Username without the @
     * @param {String} text - Text to Tweet
     * @returns {Promise<String | void>} The image URL
     */
    tweet(username, text) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { body } = yield this.client.request.get(`${this.client.baseURL}imagegen`)
                    .query({
                    type: "tweet",
                    username,
                    text
                });
                return body.message;
            }
            catch (err) {
                if (err.message === "Bad Request") {
                    throw Error("Make sure the parameter(s) is correct!");
                }
            }
        });
    }
    /**
     * DeepFry Image
     * @param {String} image - Image URL to DeepFry.
     * @returns {Promise<String | void>} The image URL
     */
    deepFry(image) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { body } = yield this.client.request.get(`${this.client.baseURL}imagegen`)
                    .query({
                    type: "deepfry",
                    image
                });
                return body.message;
            }
            catch (err) {
                if (err.message === "Bad Request") {
                    throw Error("Make sure the parameter(s) is correct!");
                }
            }
        });
    }
    /**
     * Blurpify Image
     * @param {String} image - Image URL to Blurpify.
     * @returns {Promise<String | void>} The image URL
     */
    blurpify(image) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { body } = yield this.client.request.get(`${this.client.baseURL}imagegen`)
                    .query({
                    type: "blurpify",
                    image
                });
                return body.message;
            }
            catch (err) {
                if (err.message === "Bad Request") {
                    throw Error("Make sure the parameter(s) is correct!");
                }
            }
        });
    }
    /**
     * PHComment Image
     * @param {String} image - Users Image
     * @param {String} text - Text to comment.
     * @param {String} username - User's Username.
     * @returns {Promise<String | void>} The image URL
     */
    phComment(image, text, username) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { body } = yield this.client.request.get(`${this.client.baseURL}imagegen`)
                    .query({
                    type: "phcomment",
                    image,
                    text,
                    username
                });
                return body.message;
            }
            catch (err) {
                if (err.message === "Bad Request") {
                    throw Error("Make sure the parameter(s) is correct!");
                }
            }
        });
    }
    /**
     * Magik Image
     * @param {String} image - Image to magikify
     * @param {Number} [intensity] - an integer of magik intensity from 0 to 10
     * @returns {Promise<String | void>} The image URL
     */
    magik(image, intensity) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { body } = yield this.client.request.get(`${this.client.baseURL}imagegen`)
                    .query({
                    type: "magik",
                    image,
                    intensity
                });
                return body.message;
            }
            catch (err) {
                if (err.message === "Bad Request") {
                    throw Error("Make sure the parameter(s) is correct!");
                }
            }
        });
    }
    /**
     * Fact Image
     * @param {String} text - No description provided..
     * @returns {Promise<String | void>} The image URL
     */
    fact(text) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { body } = yield this.client.request.get(`${this.client.baseURL}imagegen`)
                    .query({
                    type: "fact",
                    text
                });
                return body.message;
            }
            catch (err) {
                if (err.message === "Bad Request") {
                    throw Error("Make sure the parameter(s) is correct!");
                }
            }
        });
    }
    /**
     * Trash Image
     * @param {String} url - URL of trash waifu
     * @returns {Promise<String | void>} The image URL
     */
    trash(url) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { body } = yield this.client.request.get(`${this.client.baseURL}imagegen`)
                    .query({
                    type: "trash",
                    url
                });
                return body.message;
            }
            catch (err) {
                if (err.message === "Bad Request") {
                    throw Error("Make sure the parameter(s) is correct!");
                }
            }
        });
    }
}
exports.default = ImageGeneration;
//# sourceMappingURL=ImageGeneration.js.map