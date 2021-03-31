# Snowpack setting NODE_ENV = development on build

Repository for bug report.

snowpack.config.js

```js
const { env } = require("process");

console.log("NODE_ENV during snowpack.config.js", process.env.NODE_ENV);

module.exports = {
  env: {
    ENV_ON_SNOWPACK_CONFIG: env.NODE_ENV,
  },
  plugins: [],
  packageOptions: {},
  devOptions: {},
  buildOptions: {},
  exclude: [],
  routes: [],
  mount: {
    src: "/dist",
    public: "/",
  },
  alias: {},
};
```

Run

```js
yarn
yarn build
```

Check `build/_snowpack/env.js`

```js
export const ENV_ON_SNOWPACK_CONFIG = "production";
export const MODE = "development";
export const NODE_ENV = "development";
export const SSR = false;
```
