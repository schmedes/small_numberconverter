var mixins = require('postcss-mixins');
var nested = require('postcss-nested');
var simplevars = require('postcss-simple-vars');
var autoprefixer = require('autoprefixer');
var webpack = require('webpack');
var path = require("path");
var nodeModuleDir = path.resolve(__dirname, 'node_modules');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

  entry:{
    main: "./app/index.js",
    vendor: ['react']

  },
  output:{
       publicPath: "/dist/",
       filename: "./dist/[name].js"
  },

  module: {
     loaders:[
       {test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', "css-loader!postcss-loader")},
       {test: /\.jsx?$/, exclude: [nodeModuleDir], loader: 'babel'}
     ],
  },
  resolve: {

   extensions: ['','.js','.jsx']

 },

   postcss: [mixins, nested, simplevars, autoprefixer],

   plugins:[new webpack.optimize.CommonsChunkPlugin('vendor', './dist/vendor.js' ),
            new ExtractTextPlugin('./dist/main.css')
 ]
};
