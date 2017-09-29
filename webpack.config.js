const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    js: './script.entry.js',
    css: './style.entry.scss'
  },
  output: {
    path: path.resolve(__dirname, './docs'),
    filename: 'index.[name]'
  },
  devServer: {
    contentBase: path.resolve(__dirname, '/.docs'),
    hot: true
  },
   module: {
     rules: [
       {
         test: /\.scss|.css$/,
         use: [{
          loader: "style-loader" // creates style nodes from JS strings
          }, {
          loader: "css-loader" // translates CSS into CommonJS
          }, {
          loader: "sass-loader" // compiles Sass to CSS
          }]
       }, {
        test: /\.jsx/,
        use: [
         'react-loader'
        ]
        }
     ]
   },
   plugins: [
      new HtmlWebpackPlugin({
        title: '[flip/site]'
      }),
      new webpack.HotModuleReplacementPlugin()
    ]
};