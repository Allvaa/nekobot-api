import { NekoBot } from "./NekoBot";
import { DDLCCharacterType, DDLCBackgroundType, DDLCBodyType } from "./Types";
/**
 * Creates an instance of ImageGeneration.
 * @class ImageGeneration
 * @param {NekoBot} client
 */
declare class ImageGeneration {
    client: NekoBot;
    constructor(client: NekoBot);
    /**
     * Threats Image
     * @param {String} url - Image URL to add to template.
     * @returns {(Promise<String | void>)} The image URL
     */
    threats(url: string): Promise<string | void>;
    /**
     * Baguette Image
     * @param {String} url - Any image URL to generate, can be user avatar or anything.
     * @returns {(Promise<String | void>)} The image URL
     */
    baguette(url: string): Promise<string | void>;
    /**
     * Clyde Image
     * @param {String} text - Text to clydify.
     * @returns {(Promise<String | void>)} The image URL
     */
    clyde(text: string): Promise<string | void>;
    /**
     * Ship Image
     * @param {String} user1 - User 1’s avatar
     * @param {String} user2 - User 2’s avatar
     * @returns {(Promise<String | void>)} The image URL
     */
    ship(user1: string, user2: string): Promise<string | void>;
    /**
     * Captcha Image
     * @param {String} url - User’s avatar URL or any image.
     * @param {String} username - User’s username or or any other string to show up.
     * @returns {(Promise<String | void>)} The image URL
     */
    captcha(url: string, username: string): Promise<string | void>;
    /**
     * WhoWouldWin Image
     * @param {String} user1 - User 1’s avatar
     * @param {String} user2 - User 2’s avatar
     * @returns {(Promise<String | void>)} The image URL
     */
    whoWouldWin(user1: string, user2: string): Promise<string | void>;
    /**
     * ChangeMyMind Image
     * @param {String} text - Change my mind text.
     * @returns {(Promise<String | void>)} The image URL
     */
    changemMyMind(text: string): Promise<string | void>;
    /**
     * DDLC Image
     * @param {String} character - Can be either monika, yuri, natsuki, sayori or m, y, n, s
     * @param {String} background - Background of the image, types: bedroom, class, closet, club, corridor, house, kitchen, residential, sayori_bedroom
     * @param {String} body - Body of the character, there is only 1 or 2 for monika and 1, 1b, 2, 2b for the rest
     * @param {String} face - Face of the character to go with the body, is best to just see all the types at https://github.com/ReKTDevlol/NekoBot/blob/master/modules/fun.py#L14 (line14 to 34)
     * @param {String} text - Text for the character to say, max length of 140
     * @returns {(Promise<String | void>)} The image URL
     */
    ddlc(character: DDLCCharacterType, background: DDLCBackgroundType, body: DDLCBodyType, face: string, text: string): Promise<string | void>;
    /**
     * JPEG Image
     * @param {String} url - URL to JPEGify, would be recommended if the URL is as an JPEG or JPG format but PNG will still work :^)
     * @returns {(Promise<String | void>)} The image URL
     */
    jpeg(url: string): Promise<string | void>;
    /**
     * Lolice Image
     * @param {String} url - Lolice chief
     * @returns {(Promise<String | void>)} The image URL
     */
    lolice(url: string): Promise<string | void>;
    /**
     * Kannagen Image
     * @param {String} text - text to kannafy
     * @returns {(Promise<String | void>)} The image URL
     */
    kannagen(text: string): Promise<string | void>;
    /**
     * IPhoneX Image
     * @param {String} url - Image to fill into an iphone.
     * @returns {(Promise<String | void>)} The image URL
     */
    iphoneX(url: string): Promise<string | void>;
    /**
     * AnimeFace Image
     * @param {String} image - Image to find heccin weaboos
     * @returns {(Promise<String | void>)} The image URL
     */
    animeFace(image: string): Promise<string | void>;
    /**
     * Awooify Image
     * @param {String} url - Users avatar to AwOOOOify :3
     * @returns {(Promise<String | void>)} The image URL
     */
    awooify(url: string): Promise<string | void>;
    /**
     * TrumpTweet Image
     * @param {String} text - Text to TrumpTweet
     * @returns {(Promise<String | void>)} The image URL
     */
    trumpTweet(text: string): Promise<string | void>;
    /**
     * Tweet Image
     * @param {String} username - Twitter Username without the @
     * @param {String} text - Text to Tweet
     * @returns {(Promise<String | void>)} The image URL
     */
    tweet(username: string, text: string): Promise<string | void>;
    /**
     * DeepFry Image
     * @param {String} image - Image URL to DeepFry.
     * @returns {(Promise<String | void>)} The image URL
     */
    deepFry(image: string): Promise<string | void>;
    /**
     * Blurpify Image
     * @param {String} image - Image URL to Blurpify.
     * @returns {(Promise<String | void>)} The image URL
     */
    blurpify(image: string): Promise<string | void>;
    /**
     * PHComment Image
     * @param {String} image - Users Image
     * @param {String} text - Text to comment.
     * @param {String} username - User's Username.
     * @returns {(Promise<String | void>)} The image URL
     */
    phComment(image: string, text: string, username: string): Promise<string | void>;
    /**
     * Magik Image
     * @param {String} image - Image to magikify
     * @param {Number} [intensity] - an integer of magik intensity from 0 to 10
     * @returns {(Promise<String | void>)} The image URL
     */
    magik(image: string, intensity?: number): Promise<string | void>;
    /**
     * Fact Image
     * @param {String} text - No description provided..
     * @returns {(Promise<String | void>)} The image URL
     */
    fact(text: string): Promise<string | void>;
    /**
     * Trash Image
     * @param {String} url - URL of trash waifu
     * @returns {(Promise<String | void>)} The image URL
     */
    trash(url: string): Promise<string | void>;
}
export { ImageGeneration };
