/*
 * @Description: 
 * @Date: 2020-09-04 15:34:14
 * @LastEditTime: 2020-09-04 16:18:27
 * @Author: Jokerls
 */
const express = require('express')

const router = express.Router()

router.get('/info', function (req, res) {
  res.json('user info ...')
})

module.exports = router