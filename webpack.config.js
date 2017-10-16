const path = require('path')

module.exports = {
  entry: './public/javascript/index.js',
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
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  }
}
