const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

console.log('开始编译dev')
console.log('11111')
module.exports = {
    mode: 'development',
    entry: path.join(__dirname, '../src/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        hot: true,
        disableHostCheck: true,
        port:9090,
        inline:true,
        open:true
    },
    devtool:"source-map",
    plugins: [
        new VueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: '生成的页面',
            filename: 'index.html',
            template: 'index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.css$/, 
                exclude: /node_modules/,
                loader: 'style-loader!css-loader'
              }
        ]
    }
}