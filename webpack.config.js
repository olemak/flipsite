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
         use: [
           'style-loader', 'css-loader'
     //      { loader: 'css-loader', options: { importLoaders: 1 } },
     //      'postcss-loader'
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