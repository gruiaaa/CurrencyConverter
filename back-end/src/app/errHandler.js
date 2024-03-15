module.exports = (err, ctx) => {
    let status = 500
    switch (err.code) {
        case '10001':
            status = 400
            break
        case '10002':
            status = 409
            break
        case '10003':
            status = 404
            break
        case '10004':
            status = 401
            break
        case '40001':
            status = 401
            break
        case '40002':
            status = 401
            break
        case '40003':
            status = 401
            break
        case '40004':
            status = 401
            break
        case '40005':
            status = 400
            break
        case '40006':
            status = 400
            break
        case '40007':
            status = 400
            break
        default:
            status = 500
    }
    ctx.status = status
    ctx.body = err
}