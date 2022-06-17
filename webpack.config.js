const path=require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')
module.exports={
  mode:'development',
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
    devServer:{
        open:true,
        port:30000,
    },
    module:{
      rules:[
        {
          test:/\.css$/i,
          use:['style-loader','css-loader']
        },
        {
          test:/\.less$/i,
          use:['style-loader','css-loader','less-loader']
        },
        {
          test:/\.(png|jpg|gif|jpeg)$/i,
          type:'asset',
          parser:{
            dataUrlCondition:{
              maxSize:2*1024
            },
            generator:{
              filename:'images/[hasa:6][ext]'
            }
          }
        },
        {
          
        }
      ]
    }
}