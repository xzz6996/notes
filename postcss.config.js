//npm i postcss-loader autoprefixer
//通过postcss中的autoprefixer可以实现将CSS3中的一些需要兼容写法的属性添加响应的前缀，这样省去我们不少的时间
module.exports = {
    plugins: [
      require('autoprefixer')({browsers:['last 5 versions']})
    ]
  }