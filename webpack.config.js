var path = require('path');
var webpack = require('webpack');
var appPath = path.join(__dirname, 'src');
var exclude = /node_modules/;

var config = {

  entry: ['index'],

  resolve: {
    root: appPath,
    extensions: ['', '.webpack.config.js', '.js', '.jsx']
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [

      {
        test: /\.jsx?/,
        loader: 'babel',
        exclude: exclude,
        query: {
          presets: ['react', 'es2015']
        }
      },

      {
        test: /\.(css|scss)/,
        loader: 'style!css'
      },

      { test: /\.(ttf|eot|svg|otf)$/, loader: "file" },
      { test: /\.woff(2)?$/, loader: "url?limit=8192&minetype=application/font-woff"}
    ]
  },

  devServer: {
    contentBase: appPath,
    colors: true,
    noInfo: true,
    inline: true
  },

  devtool: 'inline-source-map'

};

module.exports = config;
