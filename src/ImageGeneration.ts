import { NekoBot } from "./NekoBot";
import { DDLCCharacterType, DDLCBackgroundType, DDLCBodyType } from "./Types";

/**
 * Creates an instance of ImageGeneration.
 * @class ImageGeneration
 * @param {NekoBot} client
 */
class ImageGeneration {
    public client: NekoBot;
    constructor(client: NekoBot) {
        this.client = client;
    }

    /**
     * Threats Image
     * @param {String} url - Image URL to add to template.
     * @returns {(Promise<String | void>)} The image URL
     */
    public threats(url: string): Promise<string | void> {
        return new Promise((resolve, reject) => {
            this.client.request("imagegen", {
                type: "threats",
                url
            })
                .then(res => resolve(res.body.message))
                .catch(reject);
        });
    }

    /**
     * Baguette Image
     * @param {String} url - Any image URL to generate, can be user avatar or anything.
     * @returns {(Promise<String | void>)} The image URL
     */
    public baguette(url: string): Promise<string | void> {
        return new Promise((resolve, reject) => {
            this.client.request("imagegen", {
                type: "baguette",
                url
            })
                .then(res => resolve(res.body.message))
                .catch(reject);
        });
    }

    /**
     * Clyde Image
     * @param {String} text - Text to clydify.
     * @returns {(Promise<String | void>)} The image URL
     */
    public clyde(text: string): Promise<string | void> {
        return new Promise((resolve, reject) => {
            this.client.request("imagegen", {
                type: "clyde",
                text
            })
                .then(res => resolve(res.body.message))
                .catch(reject);
        });
    }

    /**
     * Ship Image
     * @param {String} user1 - User 1’s avatar
     * @param {String} user2 - User 2’s avatar
     * @returns {(Promise<String | void>)} The image URL
     */
    public ship(user1: string, user2: string): Promise<string | void> {
        return new Promise((resolve, reject) => {
            this.client.request("imagegen", {
                type: "ship",
                user1,
                user2
            })
                .then(res => resolve(res.body.message))
                .catch(reject);
        });
    }

    /**
     * Captcha Image
     * @param {String} url - User’s avatar URL or any image.
     * @param {String} username - User’s username or or any other string to show up.
     * @returns {(Promise<String | void>)} The image URL
     */
    public captcha(url: string, username: string): Promise<string | void> {
        return new Promise((resolve, reject) => {
            this.client.request("imagegen", {
                type: "captcha",
                url,
                username
            })
                .then(res => resolve(res.body.message))
                .catch(reject);
        });
    }

    /**
     * WhoWouldWin Image
     * @param {String} user1 - User 1’s avatar
     * @param {String} user2 - User 2’s avatar
     * @returns {(Promise<String | void>)} The image URL
     */
    public whoWouldWin(user1: string, user2: string): Promise<string | void> {
        return new Promise((resolve, reject) => {
            this.client.request("imagegen", {
                type: "whowouldwin",
                user1,
                user2
            })
                .then(res => resolve(res.body.message))
                .catch(reject);
        });
    }

    /**
     * ChangeMyMind Image
     * @param {String} text - Change my mind text.
     * @returns {(Promise<String | void>)} The image URL
     */
    public changemMyMind(text: string): Promise<string | void> {
        return new Promise((resolve, reject) => {
            this.client.request("imagegen", {
                type: "changemymind",
                text
            })
                .then(res => resolve(res.body.message))
                .catch(reject);
        });
    }

    /**
     * DDLC Image
     * @param {String} character - Can be either monika, yuri, natsuki, sayori or m, y, n, s
     * @param {String} background - Background of the image, types: bedroom, class, closet, club, corridor, house, kitchen, residential, sayori_bedroom
     * @param {String} body - Body of the character, there is only 1 or 2 for monika and 1, 1b, 2, 2b for the rest
     * @param {String} face - Face of the character to go with the body, is best to just see all the types at https://github.com/ReKTDevlol/NekoBot/blob/master/modules/fun.py#L14 (line14 to 34)
     * @param {String} text - Text for the character to say, max length of 140
     * @returns {(Promise<String | void>)} The image URL
     */
    public ddlc(character: DDLCCharacterType, background: DDLCBackgroundType, body: DDLCBodyType, face: string, text: string): Promise<string | void> {
        return new Promise((resolve, reject) => {
            this.client.request("imagegen", {
                type: "ddlc",
                character,
                background,
                body,
                face,
                text
            })
                .then(res => resolve(res.body.message))
                .catch(reject);
        });
    }

    /**
     * JPEG Image
     * @param {String} url - URL to JPEGify, would be recommended if the URL is as an JPEG or JPG format but PNG will still work :^)
     * @returns {(Promise<String | void>)} The image URL
     */
    public jpeg(url: string): Promise<string | void> {
        return new Promise((resolve, reject) => {
            this.client.request("imagegen", {
                type: "jpeg",
                url
            })
                .then(res => resolve(res.body.message))
                .catch(reject);
        });
    }

    /**
     * Lolice Image
     * @param {String} url - Lolice chief
     * @returns {(Promise<String | void>)} The image URL
     */
    public lolice(url: string): Promise<string | void> {
        return new Promise((resolve, reject) => {
            this.client.request("imagegen", {
                type: "lolice",
                url
            })
                .then(res => resolve(res.body.message))
                .catch(reject);
        });
    }

    /**
     * Kannagen Image
     * @param {String} text - text to kannafy
     * @returns {(Promise<String | void>)} The image URL
     */
    public kannagen(text: string): Promise<string | void> {
        return new Promise((resolve, reject) => {
            this.client.request("imagegen", {
                type: "kannagen",
                text
            })
                .then(res => resolve(res.body.message))
                .catch(reject);
        });
    }

    /**
     * IPhoneX Image
     * @param {String} url - Image to fill into an iphone.
     * @returns {(Promise<String | void>)} The image URL
     */
    public iphoneX(url: string): Promise<string | void> {
        return new Promise((resolve, reject) => {
            this.client.request("imagegen", {
                type: "iphonex",
                url
            })
                .then(res => resolve(res.body.message))
                .catch(reject);
        });
    }

    /**
     * AnimeFace Image
     * @param {String} image - Image to find heccin weaboos
     * @returns {(Promise<String | void>)} The image URL
     */
    public animeFace(image: string): Promise<string | void> {
        return new Promise((resolve, reject) => {
            this.client.request("imagegen", {
                type: "animeface",
                image
            })
                .then(res => resolve(res.body.message))
                .catch(reject);
        });
    }

    /**
     * Awooify Image
     * @param {String} url - Users avatar to AwOOOOify :3
     * @returns {(Promise<String | void>)} The image URL
     */
    public awooify(url: string): Promise<string | void> {
        return new Promise((resolve, reject) => {
            this.client.request("imagegen", {
                type: "awooify",
                url
            })
                .then(res => resolve(res.body.message))
                .catch(reject);
        });
    }

    /**
     * TrumpTweet Image
     * @param {String} text - Text to TrumpTweet
     * @returns {(Promise<String | void>)} The image URL
     */
    public trumpTweet(text: string): Promise<string | void> {
        return new Promise((resolve, reject) => {
            this.client.request("imagegen", {
                type: "trumptweet",
                text
            })
                .then(res => resolve(res.body.message))
                .catch(reject);
        });
    }

    /**
     * Tweet Image
     * @param {String} username - Twitter Username without the @
     * @param {String} text - Text to Tweet
     * @returns {(Promise<String | void>)} The image URL
     */
    public tweet(username: string, text: string): Promise<string | void> {
        return new Promise((resolve, reject) => {
            this.client.request("imagegen", {
                type: "tweet",
                username,
                text
            })
                .then(res => resolve(res.body.message))
                .catch(reject);
        });
    }

    /**
     * DeepFry Image
     * @param {String} image - Image URL to DeepFry.
     * @returns {(Promise<String | void>)} The image URL
     */
    public deepFry(image: string): Promise<string | void> {
        return new Promise((resolve, reject) => {
            this.client.request("imagegen", {
                type: "deepfry",
                image
            })
                .then(res => resolve(res.body.message))
                .catch(reject);
        });
    }

    /**
     * Blurpify Image
     * @param {String} image - Image URL to Blurpify.
     * @returns {(Promise<String | void>)} The image URL
     */
    public blurpify(image: string): Promise<string | void> {
        return new Promise((resolve, reject) => {
            this.client.request("imagegen", {
                type: "blurpify",
                image
            })
                .then(res => resolve(res.body.message))
                .catch(reject);
        });
    }

    /**
     * PHComment Image
     * @param {String} image - Users Image
     * @param {String} text - Text to comment.
     * @param {String} username - User's Username.
     * @returns {(Promise<String | void>)} The image URL
     */
    public phComment(image: string, text: string, username: string): Promise<string | void> {
        return new Promise((resolve, reject) => {
            this.client.request("imagegen", {
                type: "phcomment",
                image,
                text,
                username
            })
                .then(res => resolve(res.body.message))
                .catch(reject);
        });
    }

    /**
     * Magik Image
     * @param {String} image - Image to magikify
     * @param {Number} [intensity] - an integer of magik intensity from 0 to 10
     * @returns {(Promise<String | void>)} The image URL
     */
    public magik(image: string, intensity?: number): Promise<string | void> {
        return new Promise((resolve, reject) => {
            this.client.request("imagegen", {
                type: "magik",
                image,
                intensity
            })
                .then(res => resolve(res.body.message))
                .catch(reject);
        });
    }

    /**
     * Fact Image
     * @param {String} text - No description provided..
     * @returns {(Promise<String | void>)} The image URL
     */
    public fact(text: string): Promise<string | void> {
        return new Promise((resolve, reject) => {
            this.client.request("imagegen", {
                type: "fact",
                text
            })
                .then(res => resolve(res.body.message))
                .catch(reject);
        });
    }

    /**
     * Trash Image
     * @param {String} url - URL of trash waifu
     * @returns {(Promise<String | void>)} The image URL
     */
    public trash(url: string): Promise<string | void> {
        return new Promise((resolve, reject) => {
            this.client.request("imagegen", {
                type: "trash",
                url
            })
                .then(res => resolve(res.body.message))
                .catch(reject);
        });
    }
}

export { ImageGeneration };
