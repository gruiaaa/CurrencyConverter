const { getCurrencyInfo, getCurrencyRate } = require('../service/currency.service')
const { internalServerError,
    parameterMissing,
    apiCallFailed,
    parameterNotSupported,
    parameterRetrievingFailed,
    extraFieldsError
} = require('../constant/err.type')


class CurrencyController {

    async getCurrencyList(ctx, next) {
        try {
            const data = await getCurrencyInfo()
            ctx.body = {
                code: 0,
                message: "information get",
                result: {
                    data: data
                }
            }
            ctx.set("Access-Control-Allow-Origin", "*");
            ctx.set("Access-Control-Allow-Credentials", "true");
            ctx.set("Access-Control-Max-Age", "1800");
            ctx.set("Access-Control-Allow-Headers", "content-type");
        } catch (error) {
            console.log(error);
            ctx.app.emit('error', internalServerError, ctx)
        }
    }

    async getCurrencyConvert(ctx, next) {
        const { fsym, tsyms, ...otherFields } = ctx.query;
        if (Object.keys(otherFields).length !== 0) {
            console.error("请求包含了额外的字段", otherFields);
            ctx.app.emit('error', extraFieldsError, ctx);
            return;
        }
        if (!fsym || !tsyms) {  
            ctx.app.emit('error', parameterMissing, ctx)
            return;
        }
        try {
            const data = await getCurrencyRate(fsym, tsyms)
            if (data) {
                ctx.body = {
                    code: '0',
                    message: "currency rate get",
                    result: data
                }
            }
        } catch (error) {
            if (error.name == 'APIQueryNotSupportedError') {
                console.log(error);
                ctx.app.emit('error', parameterNotSupported, ctx)
                return
            }
            else if (error.name == 'APIRetrievingError') {
                console.log(error);
                ctx.app.emit('error', parameterRetrievingFailed, ctx)
                return
            }
            else {
                console.error(error);
                ctx.app.emit('error', apiCallFailed, ctx)
            }
        }

    }
}



module.exports = new CurrencyController()