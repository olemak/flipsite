const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    js: './script.entry.js',
    css: './src/style.css'
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
         test: /\.css$/,
         use:  ['style-loader', 'postcss-loader']
       },
        {
          test: /\.jsx/,
          use: ['react-loader']
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