module.exports = {
  plugins: [
    require("postcss-import"), // Handles @import syntax
    require("postcss-nested-import"), // Handles @nested-import syntax
    require("postcss-nested"), // Unwraps nested rules
    require("autoprefixer"),
    require("cssnano"),
  ],
};
