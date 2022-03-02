const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const WorkboxPlugin = require('workbox-webpack-plugin')
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        title: "Werd-to-the-Words"
      }),
      new WebpackPwaManifest({
        filename: 'manifest.json',
        name: 'Werd-to-the-Words',
        short_name: 'W2theWords',
        description: 'A simple text editor!',
        background_color: '#00ccff',
        start_url: '/',
        publicPath: '/',
        icons: [
          {
            src: path.resolve('./src/images/byrdistheword.png'),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join('assets', 'icons')
          }
        ]
      }),
      new MiniCssExtractPlugin(),
      new WorkboxPlugin.GenerateSW()
    ],

    module: {
      rules: [
        
      ],
    },
  };
};
