const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './test/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist-dev'), // Rollup'ın 'dist' klasörüyle karışmasın
  },
  devServer: {
    static: path.resolve(__dirname, 'dist-dev'), // Sunucunun hizmet vereceği sanal klasör
    watchFiles: ['src/*', 'test/*'], // src ve test klasörlerindeki değişiklikleri izle
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './test/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(svg|png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};