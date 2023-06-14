// const webpack = require("webpack");
// module.exports = function override(config, env) {
//   // Add fallback and polyfill for 'path'
//   config.resolve.fallback = {
//     "util": require.resolve("util/"),
//     "url": require.resolve("url"),
//     "assert": require.resolve("assert"),
//     buffer: require.resolve("buffer"),
//     "path": require.resolve("path-browserify")
//   };
//   config.plugins.push(
//     new webpack.ProvidePlugin({
//       process: "process/browser",
//       // Buffer: ["buffer", "Buffer"],
//     })
//   );

//   return config;
// };
