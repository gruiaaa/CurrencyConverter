
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
            console.error("Token is blocked");
            ctx.app.emit('error', authorizedFailed, ctx);
            return;
        }
        const user = jwt.verify(token,JWT_SECRET)
        ctx.state.user= user
        await next()

    } catch (error) {
        switch(error.name){
            case 'TokenExpiredError':
                console.error("TokenExpiredError")
                ctx.app.emit('error', TokenExpiredError, ctx)
                return
            case 'JsonWebTokenError':
                console.error("AuthorizeError")
                ctx.app.emit('error', JsonWebTokenError, ctx)
                return
            default:
                console.error("AuthorizeError",error)
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