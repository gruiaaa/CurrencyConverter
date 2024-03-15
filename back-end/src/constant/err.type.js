module.exports = {
    userFormateError: {
        code: '10001',
        message: "User's email or password is empty.",
        result: ''
    },
    userAlreadyExisted: {
        code: '10002',
        message: 'The user already exists.',
        result: ''
    },
    userNotExisted: {
        code: '10003',
        message: 'The user not exists.',
        result: ''
    },
    userPasswordWrong: {
        code: '10004',
        message: "The user's password is wrong",
        result: ''
    },

    passwordFormatError: {
        code: '10006',
        message: "password Format Error",
        result: ''
    },
    passwordLengthError:{
        code: '10007',
        message: "password Length Error",
        result: ''
    },
    extraFieldsError: {
        code: '40001',
        message: "extra Fields Error",
        result: ''
    },
    TokenExpiredError: {
        code: '40002',
        message: "Token Expired Error",
        result: ""
    },
    JsonWebTokenError: {
        code: '40003',
        message: "authorize failed",
        result: ""
    },
    authorizedFailed: {
        code: '40004',
        message: "authorize failed",
        result: ""
    },
    parameterMissing:{
        code: '40005',
        message: "query parameter missing",
        result: ""
    },
    parameterNotSupported:{
        code: '40006',
        message: "parameter not supported",
        result: ""
    },
    parameterRetrievingFailed:{
        code: '40007',
        message: "Currency Conversion Unavailable",
        result: ""
    },

    internalServerError: {
        code: '50001',
        message: "Internal server error occurred.",
        result: ''
    },
    apiCallFailed: {
        code: '50002',
        message: "API call failed",
        result: ''
    }

}