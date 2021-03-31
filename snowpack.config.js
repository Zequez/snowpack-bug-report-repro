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
