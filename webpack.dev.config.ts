/// <reference path='./types/nodemon-webpack-plugin.d.ts' />

import { join } from 'path';

import NodemonPlugin = require('nodemon-webpack-plugin');
import * as webpack from 'webpack';
import * as WDS from 'webpack-dev-server';

const wdsConfig: WDS.Configuration = {
  contentBase: join(__dirname, 'dist/public'),
  hot: true,
  open: true,
  overlay: {
    errors: true,
    warnings: true
  },
  port: 3000,
  proxy: [
    {
      context: ['/api'],
      secure: false,
      target: 'http://localhost:5000'
    }
  ],
  publicPath: 'http://localhost:3000/js/',
  watchContentBase: true
};

// tslint:disable:max-line-length
const config: webpack.Configuration = {
  entry: './src/client/index.tsx',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist/public/js'
  },

  plugins: [
    new NodemonPlugin({
      ext: 'ts,tsx,js,json',
      script: join(__dirname, '/dist/app/index.js'),
      watch: join(__dirname, '/src/app')
    }) as webpack.Plugin,
    new webpack.HotModuleReplacementPlugin()
  ],

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
    ]
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  }
};
// tslint:enable:max-line-length

const compiler = webpack(config);

export { config, compiler, wdsConfig };
