const path=require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    entry:{ //多个页面入口
        login:"./src/login.js",
        index:"./src/index.js"
    },
    output:{
      // 添加hash可以防止文件缓存，每次都会生成4位的hash串
      filename:'[name].[hash:4].js' ,//[name]就可以将出口文件名和入口文件名一一对应
      path: path.resolve(__dirname,'dist')
    },
    plugins:[
        new HtmlWebpackPlugin ({
            template:"./src/index.html",
            filename:"indx.html",
            chunks:['index'] // 对应关系,index.js对应的是index.html
        }),
        new HtmlWebpackPlugin ({
            template:"./src/login.html",
            filename:"login.html",
            chunks:['login'] // 对应关系,index.js对应的是index.html
        }),
    ],
}