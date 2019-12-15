var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'production',
  entry: {
    main: './src/script.js'
  },
  output: {
    path: path.resolve(__dirname, './dist')
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src/')
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:"./src/index.html"
    })
  ]
};