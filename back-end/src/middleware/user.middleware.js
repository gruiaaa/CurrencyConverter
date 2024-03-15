
const bcrypt = require('bcryptjs')
const { getUserInfo } = require('../service/user.service');

const {
    userFormateError,
    userAlreadyExisted,
    userNotExisted,
    userPasswordWrong,
    extraFieldsError,
    internalServerError,
    passwordFormatError,
    passwordLengthError,
    parameterMissing
} = require('../constant/err.type')





const userValidator = async (ctx, next) => {
    try {
        const { user_email, password, ...otherFields } = ctx.request.body;
        if (Object.keys(otherFields).length !== 0) {
            console.error("请求包含了额外的字段", otherFields);
            ctx.app.emit('error', extraFieldsError, ctx);
            return;
        }
        if (!user_email || !password) {
            console.error("用户邮箱或密码为空", ctx.request.body);
            ctx.app.emit('error', userFormateError, ctx);
            return;
        }
        const passwordRegex = /^[0-9a-zA-Z!@#$%^&*()_+{}\[\]:;'"<>,./?\\|~-]+$/;
        if (!passwordRegex.test(password)) {
            console.error("密码格式不符合要求");
            ctx.app.emit('error', passwordFormatError, ctx);
            return;
        }
        if (password.length < 6 || password.length > 32) {
            console.error("密码长度不符合要求");
            ctx.app.emit('error', passwordLengthError, ctx);
            return;
        }
        await next();
    } catch (error) {
        console.error("Internal server error occurred.", error);
        ctx.app.emit('error', internalServerError, ctx);
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
    
    const { password,...otherFields } = ctx.request.body;
    if(!password){
        ctx.app.emit('error', parameterMissing, ctx);
        return;
    }        
    if (Object.keys(otherFields).length !== 0) {
        console.error("请求包含了额外的字段", otherFields);
        ctx.app.emit('error', extraFieldsError, ctx);
        return;
    }
    const passwordRegex = /^[0-9a-zA-Z!@#$%^&*()_+{}\[\]:;'"<>,./?\\|~-]+$/;
    if (!passwordRegex.test(password)) {
        console.error("密码格式不符合要求");
        ctx.app.emit('error', passwordFormatError, ctx);
        return;
    }
    if (password.length < 6 || password.length > 32) {
        console.error("密码长度不符合要求");
        ctx.app.emit('error', passwordLengthError, ctx);
        return;
    }

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
