const cssnano = require("cssnano");
const PresetEnv = require("postcss-preset-env");
const Mixins = require("postcss-mixins");
const Nesting = require("postcss-nested");

module.exports = {
  plugins: [
    Mixins,
    Nesting,
    cssnano({
      preset: "default",
    }),
    PresetEnv({
      stage: 1,
    }),
  ],
};
