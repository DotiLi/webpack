const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

function resolve(relatedPath) {
 path.resolve(__dirname, relatedPath);
}

module.exports = {
 entry: './app/index.js',
 output: {
   filename: 'bundle.js',
   path: resolve('dist')
   },
   plugins: [
   new HtmlWebpackPlugin({
     template: './app/index.html',
     title: 'Webpack-Demo'
    })
 ]
}