# babel-plugin-transform-koa2-async-to-generator

Changes Koa2 async/await syntax to generatos. Turn async functions into ES2015 generators

## Installation

```sh
$ npm install babel-plugin-transform-koa2-async-to-generator
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["transform-koa2-async-to-generator"]
}
```

### Via CLI

```sh
$ babel --plugins transform-koa2-async-to-generator script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["transform-koa2-async-to-generator"]
});
```
