# nekobot-api
NekoBot API wrapper for Node.js

## Installing
```sh
# npm
npm i nekobot-api

# yarn
yarn add nekobot-api
```

## Example Usage
```js
const { NekoBot } = require("nekobot-api");
const nekobotapi = new NekoBot();

async function run() {
    let image = await nekobotapi.magikImage("https://urimageurl.com");
    console.log(image);
}
run();
```

## Docs
The parameters on the methods are same as in the [NekoBot API documentation.](https://docs.nekobot.xyz/)