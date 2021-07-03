const {resolve} = require('path');

 /** @type {import('webpack').Configuration} */
module.exports = {
  entry: './src/main.js',
  devtool: 'inline-source-map',
  output: {
    filename: "[name].[hash].js",
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
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};