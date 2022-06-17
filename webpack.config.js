const path=require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')
module.exports={
    entry:'./src/main.js',
    output:{
      path:path.join(__dirname,'lib'),
      filename:'index.js',
      clean:true,
    },
    plugins:[
      new HtmlWebpackPlugin({
        template:path.join(__dirname,'public/index.html')
      })
    ],
    module:{
      rules:[
        {
          test:/\.css$/i,
          use:['style-loader','css-loader']
        },
        {
          test:/\.less$/i,
          use:['style-loader','css-loader','less-loader']
        }
      ]
    }
}