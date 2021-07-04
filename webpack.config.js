const {resolve} = require('path');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
 /** @type {import('webpack').Configuration} */
module.exports = {
  entry: './src/main.ts',
  devtool: 'inline-source-map',
  output: {
    filename: "[name].js",
    path: resolve(__dirname, 'dist'),
  },
    module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
    plugins: [
      new CleanWebpackPlugin(),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};