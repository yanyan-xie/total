// const proxy = require('http-proxy-middleware')
// const { default: app } = require('./app')

// module.exports = function(){
//     app.use(
//         proxy('/api1',{
//             target:'http://localhost:5000',
//             changeOrigin:true,
//             pathRewrite:{'^/api1':''}
//         }),
//         proxy('/api2',{
//             target:'http://localhost:5001',
//             changeOrigin:true,
//             pathRewrite:{'^/api1':''}
//         })
//     )

// }
const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function(app){
  app.use(
    createProxyMiddleware('/api1',{//遇到/api1前缀的请求，就会触发该代理配置
      target:'https://i.maoyan.com',//请求转发给谁
      changeOrigin:true,//控制服务器收到的请求头中Host字段的值
      pathRewrite:{'^/api1':''}//重写请求路径(必须写)
    })
  )
}
