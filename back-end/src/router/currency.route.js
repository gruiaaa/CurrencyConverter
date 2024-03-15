




const Router = require("koa-router")



const { getCurrencyList, getCurrencyConvert} = require('../controller/currency.controller')

const { auth } = require("../middleware/auth.middleware")

const router = new Router({ prefix: '/currency' })


// 所有货币列表
router.get('/list', getCurrencyList)

//计算转换
router.get('/convert', auth, getCurrencyConvert)



module.exports = router