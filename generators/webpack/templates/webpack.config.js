// 1. start: webpack-dev-server --open
// 2. build: webpack
// 3. more options refer to: https://webpack.js.org/guides/
// 4. dependencies
// +-- css-loader@2.1.0
// +-- style-loader@0.23.1
// +-- webpack@4.28.2
// +-- webpack-cli@3.1.2
// `-- webpack-dev-server@3.1.14
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  entry: './src/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist') 
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
    ]
  }
};