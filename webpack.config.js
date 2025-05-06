const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // entry point
  output: {
    path: path.resolve(__dirname, 'dist'), // output folder
    filename: 'bundle.js', // output file
    clean: true, // clean output folder before build
  },
  resolve: {
    extensions: ['.js', '.jsx'], // resolve these extensions
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // transform .js/.jsx
        exclude: /node_modules/,
        use: 'babel-loader', // use Babel
      },
      {
        test: /\.css$/, // for CSS files
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/, // for images
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // base HTML
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, 'public'),
    historyApiFallback: true,
    port: 3000,
    open: true,
    hot: true,
  },
  mode: 'development', // or 'production'
};
