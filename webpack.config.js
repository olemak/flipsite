const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    js: './script.entry.js',
    scss: './style.entry.scss',
    css: './style.entry.css'
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
         test: /\.scss$/,
         use: [{
          loader: "style-loader" // creates style nodes from JS strings
          }, {
          loader: "css-loader" // translates CSS into CommonJS
          }, {
          loader: "sass-loader" // compiles Sass to CSS
          }]
       }, {
         test: /\.css$/,
         use:  ['style-loader', 'postcss-loader']
       },
        {
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