const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const cssesc = require('cssesc');
const normalizePath = require('normalize-path');
const {
  stringifyRequest,
  urlToRequest,
  interpolateName,
} = require('loader-utils');

const filenameReservedRegex = /[<>:"/\\|?*\x00-\x1F]/g;
const reControlChars = /[\u0000-\u001f\u0080-\u009f]/g;
const reRelativePath = /^\.+/;
const reFileName = /([^\/]+)(?=\.\w+$)/g;

function getLocalIdent(loaderContext, localIdentName, localName, options) {
  if (!options.context) {
    // eslint-disable-next-line no-param-reassign
    options.context = loaderContext.rootContext;
  }

  var request = normalizePath(
    path.relative(options.context || '', loaderContext.resourcePath)
  );

  const find =
    loaderContext.resourcePath.match(reFileName)[0].replace('.module', '') ===
    localName;
  // eslint-disable-next-line no-param-reassign
  options.content = `${options.hashPrefix + request}+${unescape(localName)}`;

  // Using `[path]` placeholder outputs `/` we need escape their
  // Also directories can contains invalid characters for css we need escape their too
  let name = cssesc(
    interpolateName(loaderContext, localIdentName, options)
      // For `[hash]` placeholder
      .replace(/^((-?[0-9])|--)/, '_$1')
      .replace(filenameReservedRegex, '-')
      .replace(reControlChars, '-')
      .replace(reRelativePath, '-')
      .replace(/\./g, '-')
      .replace('-module', ''),
    { isIdentifier: true }
  ).replace(/\\\[local\\\]/gi, localName);

  if (find) name = name.replace('wfp--' + localName + '__', 'wfp--');
  return name;
}

module.exports = ['source-map'].map((devtool) => ({
  entry: './src/index.js',
  mode: 'development',
  output: {
    library: '@wfp/ui',
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    libraryTarget: 'umd',
  },
  devtool,
  plugins: [new CleanWebpackPlugin(), new MiniCssExtractPlugin()],
  externals: [
    {
      '@wfp/icons': '@wfp/icons',
      classnames: 'classnames',
      react: 'react',
      'react-dom': 'react-dom',
      lodash: {
        commonjs: 'lodash',
        commonjs2: 'lodash',
        amd: 'lodash',
        root: '_',
      },
    },
  ],
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
      {
        test: /styles.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          //'style-loader',
          'css-loader',
          'sass-loader',
        ],
        include: path.resolve(__dirname, './'),
      },
      {
        test: /\.module.scss$/,
        loaders: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
              modules: {
                mode: 'local',
                localIdentName: 'wfp--[name]__[local]',
                getLocalIdent,
                context: path.resolve(__dirname, 'src'),
                hashPrefix: 'my-custom-hash',
              },
            },
          },
          require.resolve('sass-loader'),
        ],
      },
    ],
  },
  optimization: {
    usedExports: true,
    runtimeChunk: true,
    // minimizer: [new UglifyJsPlugin()],
  },
}));
