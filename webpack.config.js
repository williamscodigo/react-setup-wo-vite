const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',  // Main entry point for your app
  output: {
    path: path.resolve(__dirname, 'dist'),  // Output folder
    filename: 'bundle.js',  // Output file name
  },
  mode: 'development',  // Set mode to development or production
  module: {
    rules: [
      {
        test: /\.js$/,  // Use Babel for JavaScript files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,  // Use style and css loaders for CSS
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),  // Serve static files from the 'dist' folder
    },
    port: 3000,
    hot: true,
    open: true,  // Open the browser automatically
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),  // Path to your template HTML
      filename: 'index.html',  // Name of the output HTML file
    }),
  ],
};
