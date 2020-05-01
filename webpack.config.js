const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const darkThemeVars = require('antd/dist/dark-theme');

const htmlPlugin = new HtmlWebpackPlugin({
    template:path.join(__dirname,'./public/index.html'),
    filename:'index.html'
})
 

module.exports = {
  entry: './src/index.js',
  plugins: [htmlPlugin],
  mode:'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  devServer: {
         contentBase: './dist',
         hot:true,
         openPage: 'index.html'
      },
  module: {
    rules: [
       
      { test: /\.js|jsx$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: [
            /component\.jsx$/, // 通过正则表达式(RegExp)匹配选择组件
            /\.async\.jsx$/, // 通过扩展名(extension)匹配选择组件
            "/abs/path/to/component.jsx" // 通过绝对路径(absolute path)匹配选择组件
        ],
        loader: "react-proxy-loader"
    },
    {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
    },
    {
        test: /\.less$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader', // translates CSS into CommonJS
        }, {
          loader: 'less-loader', // compiles Less to CSS
         options: {
           modifyVars: {
            'primary-color': '#000000'
            // 'hack': `true;@import "${require.resolve('antd/lib/style/color/colorPalette.less')}";`,
            //           ...darkThemeVars,
          },
           javascriptEnabled: true,
         },
        }
    ]
  }
    ]}}