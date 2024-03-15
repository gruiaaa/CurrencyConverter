const Koa = require("koa")

const {koaBody} = require("koa-body")

const errHandler = require('./errHandler')
const usersRouter = require('../router/users.route')
const currencyRouter = require('../router/currency.route')
const cors = require('@koa/cors');

const app = new Koa()

app.use(cors())
app.use(koaBody())
app.use(usersRouter.routes())
app.use(currencyRouter.routes())

//统一的错误处理
app.on('error',errHandler)

module.exports = app
