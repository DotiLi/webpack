const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

/**
 * 
 * @param {string} relatedPath './app'
 */
function resolve(relatedPath) {
 path.resolve(__dirname, relatedPath);
}

module.exports = {
	entry: {
		app: './app/index.js',
		vendors: './app/vendors.js'
  },
  output: {
    filename: '[name].js',
    path: resolve('dist')
  },
  plugins: [
  new HtmlWebpackPlugin({
    template: './app/index.html',
    title: 'Webpack-Demo'
  })
 ]
}