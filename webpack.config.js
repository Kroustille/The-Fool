const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const entry = __dirname + '/src/scripts/index.ts'

const output = {
  path: path.resolve(__dirname, './dist'),
  filename: "build.js"
}

const resolve = {
  extensions: [".ts", ".tsx", ".js", ".scss"],
}

const rules = [
  {
    test: /\.tsx?$/,
    exclude: /node-modules/,
    loader: "ts-loader"
  },
  {
    test: /\.s[ac]ss$/i,
    exclude: /node-modules/,
    use: [
      {
        loader: 'file-loader',
        options: { name: '[name].css' }
      },
      "sass-loader",
    ],
  },
]

const plugins = [
  new HtmlWebpackPlugin({
    template: './src/index.html',
    minify: {
      removeComments: true,
      collapseWhitespace: true
    }
  })
]

module.exports = {
  mode: 'development',
  entry,
  output,
  resolve,
  // rules,
  plugins
}
