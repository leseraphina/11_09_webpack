const path = require('path')
const htmlPlugin = require('html-webpack-plugin')
const copyPlugin = require('copy-webpack-plugin')
module.exports = {
  //  시작점
 entry:'./js/main.js',

  // 결과문의 반환하는 패스 설정
output:{
  // path:path.resolve(__dirname,'dist'),
  // filename:'main.js',
  clean:true
},
  // module
module:{
  rules:[
    {
      test:/\.s?css$/,
      use:[
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    },
    {
      test:/\.js$/,
      exclude:/node_modules/,
      use:['babel-loader']
    }
  ]
},
plugins:[
  new htmlPlugin({
    template:'./index.html'
  }),
  new copyPlugin(
    {patterns:[
      {from:'static'}
    ]}
  )

]
  // plugins
}