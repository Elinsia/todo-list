const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './public/index.jsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: "/",
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './build',
    historyApiFallback: true
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      { test: /\.(css|sass|scss)$/,
        use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      { test: /\.(png|jpe?g|svg|gif)$/, use: 'file-loader' },
      { test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      Public: path.resolve(__dirname, 'public')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Test',
      template: './public/index.html'
    }),
    new CleanWebpackPlugin(['build']),
    new LiveReloadPlugin(),
	  new MiniCssExtractPlugin({filename: 'index.css'})
  ]
};
