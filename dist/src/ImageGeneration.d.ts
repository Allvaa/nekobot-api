import { NekoBot } from "./NekoBot";
import { DDLCCharacterType, DDLCBackgroundType, DDLCBodyType } from "./Types";
/**
 * Creates an instance of ImageGeneration.
 * @class ImageGeneration
 */
declare class ImageGeneration {
    client: NekoBot;
    /**
     * @constructor
     * @param {NekoBot} client
     */
    constructor(client: NekoBot);
    /**
     * Threats Image
     * @param {string} url - Image URL to add to template.
     * @returns {Promise<string>} The image URL
     */
    threats(url: string): Promise<string>;
    /**
     * Baguette Image
     * @param {string} url - Any image URL to generate, can be user avatar or anything.
     * @returns {Promise<string>} The image URL
     */
    baguette(url: string): Promise<string>;
    /**
     * Clyde Image
     * @param {string} text - Text to clydify.
     * @returns {Promise<string>} The image URL
     */
    clyde(text: string): Promise<string>;
    /**
     * Ship Image
     * @param {string} user1 - User 1’s avatar
     * @param {string} user2 - User 2’s avatar
     * @returns {Promise<string>} The image URL
     */
    ship(user1: string, user2: string): Promise<string>;
    /**
     * Captcha Image
     * @param {string} url - User’s avatar URL or any image.
     * @param {string} username - User’s username or or any other string to show up.
     * @returns {Promise<string>} The image URL
     */
    captcha(url: string, username: string): Promise<string>;
    /**
     * WhoWouldWin Image
     * @param {string} user1 - User 1’s avatar
     * @param {string} user2 - User 2’s avatar
     * @returns {Promise<string>} The image URL
     */
    whoWouldWin(user1: string, user2: string): Promise<string>;
    /**
     * ChangeMyMind Image
     * @param {String} text - Change my mind text.
     * @returns {Promise<string>} The image URL
     */
    changeMyMind(text: string): Promise<string>;
    /**
     * DDLC Image
     * @param {DDLCCharacterType} character - Can be either monika, yuri, natsuki, sayori or m, y, n, s
     * @param {DDLCBackgroundType} background - Background of the image, types: bedroom, class, closet, club, corridor, house, kitchen, residential, sayori_bedroom
     * @param {DDLCBodyType} body - Body of the character, there is only 1 or 2 for monika and 1, 1b, 2, 2b for the rest
     * @param {string} face - Face of the character to go with the body, is best to just see all the types at https://github.com/ReKTDevlol/NekoBot/blob/master/modules/fun.py#L14 (line14 to 34)
     * @param {string} text - Text for the character to say, max length of 140
     * @returns {Promise<string>} The image URL
     */
    ddlc(character: DDLCCharacterType, background: DDLCBackgroundType, body: DDLCBodyType, face: string, text: string): Promise<string>;
    /**
     * JPEG Image
     * @param {string} url - URL to JPEGify, would be recommended if the URL is as an JPEG or JPG format but PNG will still work :^)
     * @returns {Promise<string>} The image URL
     */
    jpeg(url: string): Promise<string>;
    /**
     * Lolice Image
     * @param {string} url - Lolice chief
     * @returns {Promise<string>} The image URL
     */
    lolice(url: string): Promise<string>;
    /**
     * Kannagen Image
     * @param {string} text - text to kannafy
     * @returns {Promise<string>} The image URL
     */
    kannagen(text: string): Promise<string>;
    /**
     * IPhoneX Image
     * @param {string} url - Image to fill into an iphone.
     * @returns {Promise<string>} The image URL
     */
    iphoneX(url: string): Promise<string>;
    /**
     * AnimeFace Image
     * @param {string} image - Image to find heccin weaboos
     * @returns {Promise<string>} The image URL
     */
    animeFace(image: string): Promise<string>;
    /**
     * Awooify Image
     * @param {string} url - Users avatar to AwOOOOify :3
     * @returns {Promise<string>} The image URL
     */
    awooify(url: string): Promise<string>;
    /**
     * Trap Image
     * @param {string} name - User to trap.
     * @param {string} author - Author trapping user.
     * @param {string} image - Avatar’s URL to trap.
     * @returns {Promise<string>} The Image URL
     */
    trap(name: string, author: string, image: string): Promise<string>;
    /**
     * TrumpTweet Image
     * @param {string} text - Text to TrumpTweet
     * @returns {Promise<string>} The image URL
     */
    trumpTweet(text: string): Promise<string>;
    /**
     * Tweet Image
     * @param {string} username - Twitter Username without the @
     * @param {string} text - Text to Tweet
     * @returns {Promise<string>} The image URL
     */
    tweet(username: string, text: string): Promise<string>;
    /**
     * DeepFry Image
     * @param {string} image - Image URL to DeepFry.
     * @returns {Promise<string>} The image URL
     */
    deepFry(image: string): Promise<string>;
    /**
     * Blurpify Image
     * @param {string} image - Image URL to Blurpify.
     * @returns {Promise<string>} The image URL
     */
    blurpify(image: string): Promise<string>;
    /**
     * PHComment Image
     * @param {string} image - Users Image
     * @param {string} text - Text to comment.
     * @param {string} username - User's Username.
     * @returns {Promise<string>} The image URL
     */
    phComment(image: string, text: string, username: string): Promise<string>;
    /**
     * Magik Image
     * @param {string} image - Image to magikify
     * @param {number} [intensity] - an integer of magik intensity from 0 to 10
     * @returns {Promise<string>} The image URL
     */
    magik(image: string, intensity?: number): Promise<string>;
    /**
     * Fact Image
     * @param {string} text - No description provided..
     * @returns {Promise<string>} The image URL
     */
    fact(text: string): Promise<string>;
    /**
     * Trash Image
     * @param {string} url - URL of trash waifu
     * @returns {Promise<string>} The image URL
     */
    trash(url: string): Promise<string>;
    /**
     * Stickbug Image
     * @param {string} url - Image url for stickbug
     * @returns {Promise<string>} The image URL
     */
    stickbug(url: string): Promise<string>;
}
export { ImageGeneration };
