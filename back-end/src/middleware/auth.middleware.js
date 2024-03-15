
const jwt = require("jsonwebtoken")

const {JWT_SECRET} = require("../config/config.default")


const {
    TokenExpiredError,
    JsonWebTokenError,
    authorizedFailed,
} = require('../constant/err.type')

let blacklistedTokens = [];

const addToBlacklist = (token) => {
    blacklistedTokens.push(token);
};

const isInTokenBlacklisted = (token) => {
    return blacklistedTokens.includes(token);
};


const auth = async(ctx,next) =>{
    try {
        const { authorization} = ctx.request.header
        const token = authorization.replace('Bearer ','')
        if (isInTokenBlacklisted(token)) {
            console.error("Token 已被加入黑名单");
            ctx.app.emit('error', authorizedFailed, ctx);
            return;
        }
        const user = jwt.verify(token,JWT_SECRET)
        ctx.state.user= user
        await next()

    } catch (error) {
        switch(error.name){
            case 'TokenExpiredError':
                console.error("Token已经过期")
                ctx.app.emit('error', TokenExpiredError, ctx)
                return
            case 'JsonWebTokenError':
                console.error("验证失败11")
                ctx.app.emit('error', JsonWebTokenError, ctx)
                return
            default:
                console.error("验证失败",error)
                ctx.app.emit('error', authorizedFailed, ctx)
                return
        }
    }

}

module.exports = {
    auth,
    addToBlacklist,
    isInTokenBlacklisted,
}