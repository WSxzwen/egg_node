'use strict'

const jwt = require('../util/jwt')
const code = require('../util/code')
const config = require('../util/key')

module.exports = (options, app) => {
    return async (ctx, next) => {
        if(!ctx.header || !ctx.header.authorization) return ctx.errorHandle({message: code.headerFail, statusCode: 401})
        let reqToken = ctx.header.authorization.split('Bearer ').pop()
        let res = await jwt.verifyToken(reqToken)
        if(!res) return ctx.errorHandle({message: code.tokenFail, statusCode: 401})
        await next()
    }
}