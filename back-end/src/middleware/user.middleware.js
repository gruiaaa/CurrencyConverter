
const bcrypt = require('bcryptjs')
const { getUserInfo } = require('../service/user.service');

const {
    userFormateError,
    userAlreadyExisted,
    userNotExisted,
    userPasswordWrong,
    extraFieldsError,
    internalServerError
} = require('../constant/err.type')





const userValidator = async (ctx, next) => {
    try {
        const { user_email, password ,...otherFields} = ctx.request.body;
        if (Object.keys(otherFields).length !== 0) {
            console.error("请求包含了额外的字段", otherFields);
            ctx.app.emit('error', extraFieldsError, ctx);
            return;
        }
        if (!user_email || !password) {
            console.error("用户名或密码为空", ctx.request.body);
            ctx.app.emit('error', userFormateError, ctx)
            return;
        }
        await next();
    } catch (error) {
        console.error("Internal server error occurred.", error);
        ctx.app.emit('error', internalServerError, ctx)
    }

};

const verifyUserExist = async (ctx, next) => {
    const { user_email, password } = ctx.request.body;
    try {
        const userExists = await getUserInfo({ user_email });

        if (userExists) {
            ctx.app.emit('error', userAlreadyExisted, ctx)
            return;
        } else {
            await next();
        }  
    } catch (error) {
        ctx.app.emit('error', internalServerError, ctx)
        console.log(error);
    }
};


const cryptPassowrd = async (ctx, next) => {
    const { password } = ctx.request.body;
    const salt = bcrypt.genSaltSync(10);
    // hash保存的是密文
    const hash = bcrypt.hashSync(password, salt)
    ctx.request.body.password = hash
    await next()
}



const verifyPassword = async (ctx, next) => {
    const { user_email, password } = ctx.request.body
    try {
        const userExists = await getUserInfo({ user_email })
        if (!userExists) {
            ctx.app.emit('error', userNotExisted, ctx)
            return;
        }
        if (!bcrypt.compareSync(password, userExists.password)) {
            ctx.app.emit('error', userPasswordWrong, ctx)
            return;
        }

        await next()
    } catch (error) {
        ctx.app.emit('error', internalServerError, ctx)
        console.log(error);
    }

}




module.exports = {
    userValidator,
    verifyUserExist,
    cryptPassowrd,
    verifyPassword
};
