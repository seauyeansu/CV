var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    })
  ],
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.css$/, use: [
        require.resolve('style-loader'),
        {
          loader: require.resolve('css-loader'),
          options: {
            modules: {
              localIdentName: '[name]__[local]__[hash:base64:5]',
            },
        	}
        }
        ]
      }
      ]
    }
  }
