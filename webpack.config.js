const path = require('path')

module.exports = {
  entry: './public/javascript/index.js',
  devtool: 'cheap-module-eval-source-map',
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      },
      {
        test: /\.css$/, use: 'css-loader'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=/fonts/[name].[ext]'
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          publicPath: './'
        }
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    publicPath: '/public/dist',
    filename: 'bundle.js'
  }
}
