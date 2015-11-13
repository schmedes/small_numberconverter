var mixins = require('postcss-mixins');
var nested = require('postcss-nested');
var simplevars = require('postcss-simple-vars');
var autoprefixer = require('autoprefixer');
var webpack = require('webpack');
var path = require("path");
var nodeModuleDir = path.resolve(__dirname, 'node_modules');

module.exports = {

  entry:{
    main: ['webpack/hot/dev-server',"./app/index.js"]

  },
  output:{
       path: path.join(__dirname,"dist"),
       publicPath: "/dist/",
       filename: "[name].js"
  },

  module: {
     loaders:[
       {test: /\.css$/, loader: "style-loader!css-loader!postcss-loader"},
       {test: /\.jsx?$/, exclude: [nodeModuleDir], loader: 'babel'}
     ],
  },
  resolve: {

   extensions: ['','.js','.jsx']

 },

   postcss: [mixins, nested, simplevars, autoprefixer],

   plugins:[new webpack.HotModuleReplacementPlugin()]
};
