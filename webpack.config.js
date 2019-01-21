const { join } = require('path');

const { HotModuleReplacementPlugin } = require('webpack');
const NodemonPlugin = require('nodemon-webpack-plugin');

module.exports = {
  entry: './src/client/index.tsx',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist/public/js',
  },

  plugins: [
    new NodemonPlugin({
      ext: 'ts,tsx,js,json',
      script: join(__dirname, '/dist/app/index.js'),
      watch: join(__dirname, '/src/app'),
    }),
    new HotModuleReplacementPlugin(),
  ],

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',
  devServer: {
    contentBase: join(__dirname, 'dist/public'),
    hot: true,
    overlay: {
      errors: true,
      warnings: true,
    },
    port: 3000,
    proxy: [
      {
        context: ['/api'],
        target: 'http://localhost:5000',
        secure: false,
      },
    ],
    publicPath: 'http://localhost:3000/js/',
    watchContentBase: true,
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
    ],
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
};
