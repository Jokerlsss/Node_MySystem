/*
 * @Description: 
 * @Date: 2020-09-04 09:06:45
 * @LastEditTime: 2020-09-04 14:39:49
 * @Author: Jokerls
 */
const express = require('express')
const router = require('./router')

// 创建 express 应用
const app = express()

app.use('/', router)

// 使 express 监听 5000 端口号发起的 http 请求
const server = app.listen(5000, function () {
  const { address, port } = server.address()
  console.log('HTTP server is running on http://%s:%s', address, port)
})