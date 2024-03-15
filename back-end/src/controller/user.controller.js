const jwt = require('jsonwebtoken')

const { createUser, getUserInfo, updateByID } = require('../service/user.service')

const { JWT_SECRET } = require("../config/config.default")
const { internalServerError } = require('../constant/err.type')
const { addToBlacklist } = require('../middleware/auth.middleware');

class UserController {
    async register(ctx, next) {
        const { user_email, password } = ctx.request.body
        try {
            const res = await createUser(user_email, password)
            ctx.body = {
                code: "0",
                message: "user rgitster success",
                result: {
                    id: res.id,
                    user_email: res.user_email
                }
            }
        } catch (error) {   
            console.log(error);
            ctx.app.emit('error', internalServerError, ctx)
        }

    }

    async login(ctx, next) {
        const { user_email } = ctx.request.body
        try {
            const { password, ...res } = await getUserInfo({ user_email })
            ctx.state = 200
            ctx.body = {
                code: '0',
                message: "User login success!",
                result: {
                    token: jwt.sign(res, JWT_SECRET, { expiresIn: '1d' })
                }

            }
        } catch (error) {
            console.log(error);
            ctx.app.emit('error', internalServerError, ctx)
        }
    }

    async changePassword(ctx, next) {
        try {
            const id = ctx.state.user.id
            const password = ctx.request.body.password
            if (await updateByID({ id, password })) {
                ctx.body = {
                    code: '0',
                    message: "Change Password success!",
                    result: ""
                }
            }
        } catch (error) {
            console.log(error);
            ctx.app.emit('error', internalServerError, ctx)
        }

    }

    async logout(ctx,next) {
        const { authorization} = ctx.request.header
        const token = authorization.replace('Bearer ','')

        // 将令牌添加到黑名单中
        addToBlacklist(token);
        ctx.body = {
            code: '0',
            message: "logout success",
            result: ""
        }
    };
}



module.exports = new UserController()