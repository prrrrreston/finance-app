const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '..', 'finance-app', 'src', 'index.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, '..', 'finance-app', 'dist'),
    filename: 'index.bundle.js',
  },
  devServer: {
    port: 8000,
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'styles.css' // Specify the filename for the extracted CSS
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  mode: 'development',
};
