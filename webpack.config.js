const Path = require('path'),
      HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports ={
  entry: {
    app: Path.join(__dirname, "src", "index")
  },
  output: {
    path: Path.join(__dirname, "dist"),
    filename: "[name].[hash].js",
    publicPath: "/static/"
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /.html$/,
        use: {
          loader: "html-loader"
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: "body"
    })
  ],
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  }
}
