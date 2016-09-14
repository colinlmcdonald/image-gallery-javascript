module.exports = {
  entry: './public/js/app.js',
  output: {
      path: './public/build',
      filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loaders: [ 'style', 'css', 'sass' ]
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'url-loader'      }
    ]
  }
};