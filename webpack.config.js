/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const entry = __dirname + '/src/app/index.ts'

const output = {
  path: path.resolve(__dirname, './dist'),
  filename: 'build.js'
}

const resolve = {
  extensions: [ '.ts', '.tsx', '.js', '.scss' ],
  alias: {
    '#': path.resolve(__dirname, 'src/app'),
  }
}

const rules = [
  {
    test: /\.tsx?$/,
    exclude: /node-modules/,
    loader: 'ts-loader',
  },
  // {
  //   test: /\.s[ac]ss$/i,
  //   exclude: /node-modules/,
  //   use: [
  //     {
  //       loader: 'file-loader',
  //       options: { name: '[name].css' }
  //     },
  //     'sass-loader',
  //   ],
  // },
]

const plugins = [
  new HtmlWebpackPlugin({
    template: './src/index.html',
    minify: {
      removeComments: true,
      collapseWhitespace: true
    }
  }),
  new CopyPlugin({
    patterns: [
      { from: 'src/manifest.json', to: 'manifest.json' }
    ]
  })
]

module.exports = {
  mode: 'development',
  entry,
  output,
  resolve,
  module: {
    rules,
  },
  plugins
}
