const Router = require("koa-router")



const { userValidator, verifyUserExist, cryptPassowrd, verifyPassword } = require('../middleware/user.middleware')

const { register, login ,changePassword,logout} = require('../controller/user.controller')

const { auth } = require("../middleware/auth.middleware")

const router = new Router({ prefix: '/users' })


// 注册接口
router.post('/register', userValidator, verifyUserExist, cryptPassowrd, register)


// 登录接口
router.post('/login', userValidator, verifyPassword, login)


//修改密码接口
router.patch('/', auth,cryptPassowrd, changePassword)

//退出接口
router.post('/logout', auth,logout)


module.exports = router