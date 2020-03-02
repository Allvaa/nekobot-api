# nekobot-api [![CircleCI](https://circleci.com/gh/Allvaa/nekobot-api.svg?style=svg)](https://circleci.com/gh/Allvaa/nekobot-api) [![Depedencies](https://img.shields.io/david/Allvaa/nekobot-api.svg)](https://david-dm.org/Allvaa/nekobot-api)
NekoBot API wrapper for Node.js

## Installing
[![Version](https://nodei.co/npm/nekobot-api.png?compact=true)](https://nodei.co/npm/nekobot-api)
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
[Documentation](https://nba.allvzx.website)