declare class NekoBot {
    version: String;
    baseURL: String;
    constructor();
    /**
     * Threats Image
     * @param {String} url - Image URL to add to template.
     * @returns {String} The image URL
     */
    threatsImage(url: String): Promise<String | void>;
    /**
     * Baguette Image
     * @param {String} url - Any image URL to generate, can be user avatar or anything.
     * @returns {String} The image URL
     */
    baguetteImage(url: String): Promise<String | void>;
    /**
     * Clyde Image
     * @param {String} text - Text to clydify.
     * @returns {String} The image URL
     */
    clydeImage(text: String): Promise<String | void>;
    /**
     * Ship Image
     * @param {String} user1 - User 1’s avatar
     * @param {String} user2 - User 2’s avatar
     * @returns {String} The image URL
     */
    shipImage(user1: String, user2: String): Promise<String | void>;
    /**
     * Captcha Image
     * @param {String} url - User’s avatar URL or any image.
     * @param {String} username - User’s username or or any other string to show up.
     * @returns {String} The image URL
     */
    captchaImage(url: String, username: String): Promise<String | void>;
    /**
     * WhoWouldWin Image
     * @param {String} user1 - User 1’s avatar
     * @param {String} user2 - User 2’s avatar
     * @returns {String} The image URL
     */
    whowouldwinImage(user1: String, user2: String): Promise<String | void>;
    /**
     * ChangeMyMind Image
     * @param {String} text - Change my mind text.
     * @returns {String} The image URL
     */
    changemymindImage(text: String): Promise<String | void>;
    /**
     * Dllc Image
     * @param {String} character - Can be either monika, yuri, natsuki, sayori or m, y, n, s
     * @param {String} background - Background of the image, types: bedroom, class, closet, club, corridor, house, kitchen, residential, sayori_bedroom
     * @param {String} body - Body of the character, there is only 1 or 2 for monika and 1, 1b, 2, 2b for the rest
     * @param {String} face - Face of the character to go with the body, is best to just see all the types at https://github.com/ReKTDevlol/NekoBot/blob/master/modules/fun.py#L14 (line14 to 34)
     * @param {String} text	- Text for the character to say, max length of 140
     * @returns {String} The image URL
     */
    dllcImage(character: String, background: String, body: String, face: String, text: String): Promise<String | void>;
    /**
     * JPEG Image
     * @param {String} url - URL to JPEGify, would be recommended if the URL is as an JPEG or JPG format but PNG will still work :^)
     * @returns {String} The image URL
     */
    jpegImage(url: String): Promise<String | void>;
    /**
     * Lolice Image
     * @param {String} url - Lolice chief
     * @returns {String} The image URL
     */
    loliceImage(url: String): Promise<String | void>;
    /**
     * Kannagen Image
     * @param {String} text - text to kannafy
     * @returns {String} The image URL
     */
    kannagenImage(text: String): Promise<String | void>;
    /**
     * IPhoneX Image
     * @param {String} url - Image to fill into an iphone.
     * @returns {String} The image URL
     */
    iphonexImage(url: String): Promise<String | void>;
    /**
     * AnimeFace Image
     * @param {String} image - Image to find heccin weaboos
     * @returns {String} The image URL
     */
    animefaceImage(image: String): Promise<String | void>;
    /**
     * Awooify Image
     * @param {String} url - Users avatar to AwOOOOify :3
     * @returns {String} The image URL
     */
    awooifyImage(url: String): Promise<String | void>;
    /**
     * TrumpTweet Image
     * @param {String} text - Text to TrumpTweet
     * @returns {String} The image URL
     */
    trumptweetImage(text: String): Promise<String | void>;
    /**
     * Tweet Image
     * @param {String} username - Twitter Username without the @
     * @param {String} text - Text to Tweet
     * @returns {String} The image URL
     */
    tweetImage(username: String, text: String): Promise<String | void>;
    /**
     * DeepFry Image
     * @param {String} image - Image URL to DeepFry.
     * @returns {String} The image URL
     */
    deepfryImage(image: String): Promise<String | void>;
    /**
     * Blurpify Image
     * @param {String} image - Image URL to Blurpify.
     * @returns {String} The image URL
     */
    blurpifyImage(image: String): Promise<String | void>;
    /**
     * PHComment Image
     * @param {String} image - Users Image
     * @param {String} text - Text to comment.
     * @param {String} username - User's Username.
     * @returns {String} The image URL
     */
    phcommentImage(image: String, text: String, username: String): Promise<String | void>;
    /**
     * Magik Image
     * @param {String} image - Image to magikify
     * @param {Number} intensity - an integer of magik intensity from 0 to 10
     * @returns {String} The image URL
     */
    magikImage(image: String, intensity: Number): Promise<String | void>;
    /**
     * Fact Image
     * @param {String} text - No description provided..
     * @returns {String} The image URL
     */
    factImage(text: String): Promise<String | void>;
    /**
     * Trash Image
     * @param {String} url - URL of trash waifu
     * @returns {String} The image URL
     */
    trashImage(url: String): Promise<String | void>;
    /**
     * Random Image
     * @param {String} type - The type of image to get. Current types: hass, hmidriff, pgif, 4k, hentai, holo, hneko, neko, hkitsune, kemonomimi, anal, hanal, gonewild, kanna, ass, pussy, thigh, hthigh, gah, coffee, food
     * @returns {String} The image URL
     */
    getRandomImage(type: String): Promise<String | void>;
}
export default NekoBot;
