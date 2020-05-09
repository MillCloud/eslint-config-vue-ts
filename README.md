# @modyqyw/eslint-config-vue-ts

An ESLint shareable config for vue with typescript. Also support uni-app.

## Usage

- Install the config.

```sh
npm i vue@~2.6.0 vue-property-decorator@～8.4.0
npm i eslint@~6.8.0 typescript@～3.8.0 @modyqyw/eslint-config-vue-ts@~1.2.0 -D
```

For yarn, run scripts below.

```sh
yarn add vue@~2.6.0 vue-property-decorator@～8.4.0
yarn add eslint@~6.8.0 typescript@～3.8.0 @modyqyw/eslint-config-vue-ts@~1.2.0 -D
```

- Set up.

```js
// .eslintrc.js
module.exports = {
  extends: ["@modyqyw/vue-ts"],
};
```

- For VSCode
  - Install plugins.
    - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
    - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
    - [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
  - Set up `Settings.json`. Then `F1` => `Format Document`(call vetur for `*.vue` files and prettier for other files) => Save File(call ESLint).

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "emmet.includeLanguages": {
    "javascript": "javascriptreact",
    "typescript": "typescriptreact",
    "json": "jsonc"
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "html",
    "vue",
    "vue-html"
  ],
  "files.eol": "\n",
  "files.associations": {
    "*.js": "javascriptreact",
    "*.ts": "typescriptreact",
    "*.wxml": "html",
    "*.wxs": "javascript",
    "*.wxss": "css",
    "*.axml": "html",
    "*.sjs": "javascript",
    "*.acss": "css",
    "*.wpy": "html",
    "*.json": "jsonc",
    "*.nvue": "vue"
  },
  "vetur.format.defaultFormatterOptions": {
    "prettyhtml": {
      "wrapAttributes": true
    }
  },
  "[vue]": {
    "editor.defaultFormatter": "octref.vetur"
  }
}
```

- For WebStorm
  - TODO

## More Config

- [@modyqyw/eslint-config](https://github.com/Millcloud/eslint-config)
- [@modyqyw/eslint-config-vue](https://github.com/Millcloud/eslint-config-vue)
- [@modyqyw/eslint-config-react](https://github.com/Millcloud/eslint-config-react)

## License

[MIT](./LICENSE)

Copyright (c) 2020-present Millcloud
