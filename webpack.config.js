var path = require('path');
var webpack = require('webpack');
var packageData = require('./package.json');
var minify = process.argv.indexOf('--minify') != -1;
var filename = [packageData.name, packageData.version, 'js'];
var plugins = [];

if(minify){
  filename.splice(filename.length - 1, 0, "min");
  plugins.push(new webpack.optimize.UglifyJSPlugin());
}

module.exports = {
  entry: path.resolve(__dirname, packageData.main),
  output: {
    path: path.resolve(__dirname, 'build/js'),
    filename: filename.join('.')
  },
  devtool: 'source-map',
  plugins: plugins
}
