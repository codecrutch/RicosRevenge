let path = require("path");

module.exports = {
  context: __dirname,
  entry: "./lib/main.js",
  output: {
    path: path.join(__dirname, 'lib'),
    filename: "ricosrevenge.js",
    devtoolModuleFilenameTemplate: '[resourcePath]',
    devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[hash]'
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  devtool: 'source-maps',
  resolve: {
    extensions: ["*", ".js"]
  }
};
