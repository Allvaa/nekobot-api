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
const api = new NekoBot();

async function run() {
    let image = await api.imageGen.magik("image url"); // returns a string.
    console.log(image);
}
run();
```
[Documentation](https://nekobot-api.allvzx.website)