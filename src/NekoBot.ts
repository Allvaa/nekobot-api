import request from "superagent";
import { version } from "../package.json";

class NekoBot {
    public version: String;
    public baseURL: String;
    constructor() {
        this.version = version;
        this.baseURL = "https://nekobot.xyz/api/";
    }

    /**
     * Threats Image
     * @param {String} url - Image URL to add to template.
     * @returns {Promise<String | void>} The image URL
     */
    public async threatsImage(url: String): Promise<String | void> {
        try {
            const { body } = await request.get(`${this.baseURL}imagegen`)
                .query({
                    type: "threats",
                    url
                });
            return body.message;
        } catch (err) {
            if (err.message === "Bad Request") {
                throw Error("Make sure the parameter(s) is correct!");
            }
        }
    }

    /**
     * Baguette Image
     * @param {String} url - Any image URL to generate, can be user avatar or anything.
     * @returns {Promise<String | void>} The image URL
     */
    public async baguetteImage(url: String): Promise<String | void> {
        try {
            const { body } = await request.get(`${this.baseURL}imagegen`)
                .query({
                    type: "baguette",
                    url
                });
            return body.message;
        } catch (err) {
            if (err.message === "Bad Request") {
                throw Error("Make sure the parameter(s) is correct!");
            }
        }
    }

    /**
     * Clyde Image
     * @param {String} text - Text to clydify.
     * @returns {Promise<String | void>} The image URL
     */
    public async clydeImage(text: String): Promise<String | void> {
        try {
            const { body } = await request.get(`${this.baseURL}imagegen`)
                .query({
                    type: "clyde",
                    text
                });
            return body.message;
        } catch (err) {
            if (err.message === "Bad Request") {
                throw Error("Make sure the parameter(s) is correct!");
            }
        }
    }

    /**
     * Ship Image
     * @param {String} user1 - User 1’s avatar
     * @param {String} user2 - User 2’s avatar
     * @returns {Promise<String | void>} The image URL
     */
    public async shipImage(user1: String, user2: String): Promise<String | void> {
        try {
            const { body } = await request.get(`${this.baseURL}imagegen`)
                .query({
                    type: "ship",
                    user1,
                    user2
                });
            return body.message;
        } catch (err) {
            if (err.message === "Bad Request") {
                throw Error("Make sure the parameter(s) is correct!");
            }
        }
    }

    /**
     * Captcha Image
     * @param {String} url - User’s avatar URL or any image.
     * @param {String} username - User’s username or or any other string to show up.
     * @returns {Promise<String | void>} The image URL
     */
    public async captchaImage(url: String, username: String): Promise<String | void> {
        try {
            const { body } = await request.get(`${this.baseURL}imagegen`)
                .query({
                    type: "captcha",
                    url,
                    username
                });
            return body.message;
        } catch (err) {
            if (err.message === "Bad Request") {
                throw Error("Make sure the parameter(s) is correct!");
            }
        }
    }

    /**
     * WhoWouldWin Image
     * @param {String} user1 - User 1’s avatar
     * @param {String} user2 - User 2’s avatar
     * @returns {Promise<String | void>} The image URL
     */
    public async whowouldwinImage(user1: String, user2: String): Promise<String | void> {
        try {
            const { body } = await request.get(`${this.baseURL}imagegen`)
                .query({
                    type: "whowouldwin",
                    user1,
                    user2
                });
            return body.message;
        } catch (err) {
            if (err.message === "Bad Request") {
                throw Error("Make sure the parameter(s) is correct!");
            }
        }
    }

    /**
     * ChangeMyMind Image
     * @param {String} text - Change my mind text.
     * @returns {Promise<String | void>} The image URL
     */
    public async changemymindImage(text: String): Promise<String | void> {
        try {
            const { body } = await request.get(`${this.baseURL}imagegen`)
                .query({
                    type: "changemymind",
                    text
                });
            return body.message;
        } catch (err) {
            if (err.message === "Bad Request") {
                throw Error("Make sure the parameter(s) is correct!");
            }
        }
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
    public async ddlcImage(character: String, background: String, body: String, face: String, text: String): Promise<String | void> {
        try {
            const { body: b } = await request.get(`${this.baseURL}imagegen`)
                .query({
                    type: "ddlc",
                    character,
                    background,
                    body,
                    face,
                    text
                });
            return b.message;
        } catch (err) {
            if (err.message === "Bad Request") {
                throw Error("Make sure the parameter(s) is correct!");
            }
        }
    }

    /**
     * JPEG Image
     * @param {String} url - URL to JPEGify, would be recommended if the URL is as an JPEG or JPG format but PNG will still work :^)
     * @returns {Promise<String | void>} The image URL
     */
    public async jpegImage(url: String): Promise<String | void> {
        try {
            const { body } = await request.get(`${this.baseURL}imagegen`)
                .query({
                    type: "jpeg",
                    url
                });
            return body.message;
        } catch (err) {
            if (err.message === "Bad Request") {
                throw Error("Make sure the parameter(s) is correct!");
            }
        }
    }

    /**
     * Lolice Image
     * @param {String} url - Lolice chief
     * @returns {Promise<String | void>} The image URL
     */
    public async loliceImage(url: String): Promise<String | void> {
        try {
            const { body } = await request.get(`${this.baseURL}imagegen`)
                .query({
                    type: "lolice",
                    url
                });
            return body.message;
        } catch (err) {
            if (err.message === "Bad Request") {
                throw Error("Make sure the parameter(s) is correct!");
            }
        }
    }

    /**
     * Kannagen Image
     * @param {String} text - text to kannafy
     * @returns {Promise<String | void>} The image URL
     */
    public async kannagenImage(text: String): Promise<String | void> {
        try {
            const { body } = await request.get(`${this.baseURL}imagegen`)
                .query({
                    type: "kannagen",
                    text
                });
            return body.message;
        } catch (err) {
            if (err.message === "Bad Request") {
                throw Error("Make sure the parameter(s) is correct!");
            }
        }
    }

    /**
     * IPhoneX Image
     * @param {String} url - Image to fill into an iphone.
     * @returns {Promise<String | void>} The image URL
     */
    public async iphonexImage(url: String): Promise<String | void> {
        try {
            const { body } = await request.get(`${this.baseURL}imagegen`)
                .query({
                    type: "iphonex",
                    url
                });
            return body.message;
        } catch (err) {
            if (err.message === "Bad Request") {
                throw Error("Make sure the parameter(s) is correct!");
            }
        }
    }

    /**
     * AnimeFace Image
     * @param {String} image - Image to find heccin weaboos
     * @returns {Promise<String | void>} The image URL
     */
    public async animefaceImage(image: String): Promise<String | void> {
        try {
            const { body } = await request.get(`${this.baseURL}imagegen`)
                .query({
                    type: "animeface",
                    image
                });
            return body.message;
        } catch (err) {
            if (err.message === "Bad Request") {
                throw Error("Make sure the parameter(s) is correct!");
            }
        }
    }

    /**
     * Awooify Image
     * @param {String} url - Users avatar to AwOOOOify :3
     * @returns {Promise<String | void>} The image URL
     */
    public async awooifyImage(url: String): Promise<String | void> {
        try {
            const { body } = await request.get(`${this.baseURL}imagegen`)
                .query({
                    type: "awooify",
                    url
                });
            return body.message;
        } catch (err) {
            if (err.message === "Bad Request") {
                throw Error("Make sure the parameter(s) is correct!");
            }
        }
    }

    /**
     * TrumpTweet Image
     * @param {String} text - Text to TrumpTweet
     * @returns {Promise<String | void>} The image URL
     */
    public async trumptweetImage(text: String): Promise<String | void> {
        try {
            const { body } = await request.get(`${this.baseURL}imagegen`)
                .query({
                    type: "trumptweet",
                    text
                });
            return body.message;
        } catch (err) {
            if (err.message === "Bad Request") {
                throw Error("Make sure the parameter(s) is correct!");
            }
        }
    }

    /**
     * Tweet Image
     * @param {String} username - Twitter Username without the @
     * @param {String} text - Text to Tweet
     * @returns {Promise<String | void>} The image URL
     */
    public async tweetImage(username: String, text: String): Promise<String | void> {
        try {
            const { body } = await request.get(`${this.baseURL}imagegen`)
                .query({
                    type: "tweet",
                    username,
                    text
                });
            return body.message;
        } catch (err) {
            if (err.message === "Bad Request") {
                throw Error("Make sure the parameter(s) is correct!");
            }
        }
    }

    /**
     * DeepFry Image
     * @param {String} image - Image URL to DeepFry.
     * @returns {Promise<String | void>} The image URL
     */
    public async deepfryImage(image: String): Promise<String | void> {
        try {
            const { body } = await request.get(`${this.baseURL}imagegen`)
                .query({
                    type: "deepfry",
                    image
                });
            return body.message;
        } catch (err) {
            if (err.message === "Bad Request") {
                throw Error("Make sure the parameter(s) is correct!");
            }
        }
    }

    /**
     * Blurpify Image
     * @param {String} image - Image URL to Blurpify.
     * @returns {Promise<String | void>} The image URL
     */
    public async blurpifyImage(image: String): Promise<String | void> {
        try {
            const { body } = await request.get(`${this.baseURL}imagegen`)
                .query({
                    type: "blurpify",
                    image
                });
            return body.message;
        } catch (err) {
            if (err.message === "Bad Request") {
                throw Error("Make sure the parameter(s) is correct!");
            }
        }
    }

    /**
     * PHComment Image
     * @param {String} image - Users Image
     * @param {String} text - Text to comment.
     * @param {String} username - User's Username.
     * @returns {Promise<String | void>} The image URL
     */
    public async phcommentImage(image: String, text: String, username: String): Promise<String | void> {
        try {
            const { body } = await request.get(`${this.baseURL}imagegen`)
                .query({
                    type: "phcomment",
                    image,
                    text,
                    username
                });
            return body.message;
        } catch (err) {
            if (err.message === "Bad Request") {
                throw Error("Make sure the parameter(s) is correct!");
            }
        }
    }

    /**
     * Magik Image
     * @param {String} image - Image to magikify
     * @param {Number} intensity - an integer of magik intensity from 0 to 10
     * @returns {Promise<String | void>} The image URL
     */
    public async magikImage(image: String, intensity: Number): Promise<String | void> {
        try {
            const { body } = await request.get(`${this.baseURL}imagegen`)
                .query({
                    type: "magik",
                    image,
                    intensity
                });
            return body.message;
        } catch (err) {
            if (err.message === "Bad Request") {
                throw Error("Make sure the parameter(s) is correct!");
            }
        }
    }

    /**
     * Fact Image
     * @param {String} text - No description provided..
     * @returns {Promise<String | void>} The image URL
     */
    public async factImage(text: String): Promise<String | void> {
        try {
            const { body } = await request.get(`${this.baseURL}imagegen`)
                .query({
                    type: "fact",
                    text
                });
            return body.message;
        } catch (err) {
            if (err.message === "Bad Request") {
                throw Error("Make sure the parameter(s) is correct!");
            }
        }
    }

    /**
     * Trash Image
     * @param {String} url - URL of trash waifu
     * @returns {Promise<String | void>} The image URL
     */
    public async trashImage(url: String): Promise<String | void> {
        try {
            const { body } = await request.get(`${this.baseURL}imagegen`)
                .query({
                    type: "trash",
                    url
                });
            return body.message;
        } catch (err) {
            if (err.message === "Bad Request") {
                throw Error("Make sure the parameter(s) is correct!");
            }
        }
    }

    /**
     * Random Image
     * @param {String} type - The type of image to get. Current types: hass, hmidriff, pgif, 4k, hentai, holo, hneko, neko, hkitsune, kemonomimi, anal, hanal, gonewild, kanna, ass, pussy, thigh, hthigh, gah, coffee, food
     * @returns {Promise<String | void>} The image URL
     */
    public async getRandomImage(type: String): Promise<String | void> {
        try {
            const { body } = await request.get(`${this.baseURL}image`)
                .query({
                    type
                });
            return body.message;
        } catch (err) {
            if (err.message === "Bad Request") {
                throw Error("Make sure the parameter(s) is correct!");
            }
        }
    }
}
export default NekoBot;