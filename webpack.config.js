'use strict';
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

var isProduction = function () {
  return process.env.NODE_ENV === 'production';
};

var entry = './src/main.jsx';
var outputPath = './public/';

var plugins = [
  new webpack.optimize.CommonsChunkPlugin({
    name: 'commons',
    filename: 'js/commons.js'
  }),
  new webpack.ProvidePlugin({
    React: 'react',
    ReactDOM: 'react-dom',
    reqwest: 'reqwest',
  }),
  new HtmlWebpackPlugin({
    template: './src/assets/pages/index.html',
    filename: 'index.html',
    inject: 'body',
  }),
];

if( isProduction() ) {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      test: /(\.jsx|\.js)$/,
      compress: {
        warnings: false
      },
    })
  );
}

var config = {
  target: 'web',
  cache: true,
  entry: entry,
  output: {
    path: path.join(__dirname, outputPath),
    filename: 'js/[name].bundle.js',
    publicPath: isProduction()? 'http://localhost:3000/':'http://localhost:3000/',
  },
  module: {
    loaders: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel?presets[]=es2015&presets[]=react',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        loader: 'url?limit=1024&name=images/[name].[ext]'
      },
      {
        test: /\.(woff2?|otf|eot|svg|ttf)$/i,
        loader: 'url?name=fonts/[name].[ext]'
      },
      {
        test: /\.html$/,
        loader: 'url?name=[name].[ext]'
      },
    ],
  },
  plugins: plugins,
  resolve: {
    root: __dirname,
    extensions: ['', '.js', '.jsx']
  },
  devtool: isProduction()?null:'source-map',
};

module.exports = config;
