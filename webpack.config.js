var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'index_bundle.js'
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  module: {
      rules: [
        { test: /\.(js)$/, use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env',
                      '@babel/react',{
                          'plugins': ['@babel/plugin-proposal-class-properties']}]
          }}},
        { test: /\.css$/, use: ['style-loader', 'css-loader']}
  ]},
}
