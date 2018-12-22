const path=require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports={
    entry:'./src/index.js',
    output:{
        filename:'[name].[hash:4].js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader","postcss-loader"]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["env","stage-0"]
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        limit: 8192, // 小于8k的图片自动转成base64格式，并且不会存在实体图片
                        name:'img/[name].[hash:7].[ext]'
                    }
                }
            },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            hash:true
        }),
        new MiniCssExtractPlugin({
            filename:"css/[name].css",
            chunkFilename: "css/[id].css"
        }),
        new CleanWebpackPlugin('dist')
    ],
    optimization: { //抽离公共
        splitChunks: {
            cacheGroups: {
                    commons: {
                        name: "commons",
                        chunks: "initial",
                        minChunks: 2
                    }
            }
        }
    },
    devServer:{
        port:8090,
        host:'localhost'
    }
}