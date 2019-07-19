const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  devtool: "#eval-source-map",
  module: {
    loaders: [{
      exclude: /node_modules/,
      test: /\.(js|jsx|es6)$/,
      loader: 'babel-loader',
      query: {
        presets: ["react", "es2015", "stage-0"]
      }
    },
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('css!sass')
    }]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env':{ 'NODE_ENV': JSON.stringify('production') } }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: { warnings: false },
    //   output: {comments: false },
    //   mangle: false,
    //   sourcemap: false,
    //   minimize: true,
    //   mangle: { except: ['$super', '$', 'exports', 'require', '$q', '$ocLazyLoad'] }
    // }),
    new ExtractTextPlugin('src/public/stylesheets/app.css', {
      allChunks: true
    })
  ]
};

module.exports = config;
