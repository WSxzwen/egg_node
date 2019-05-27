'use strict'

// const Service = require('egg').Service
const BaseService = require('./base')
const jwt = require('../util/jwt')

class UsersService extends BaseService {
    constructor(ctx) {
        super(ctx, ctx.model.User)
        this.model = ctx.model.User
    }

    async register(data){
        let user = await this.model.findOne({
            where: {username: data.username}
        })
        if(!user) return this.model.create(data)
        return null
    }

    async login(data){
        let { username, password } = data
        return this.model.findOne({
            where: {username, password}
        })
    }

    async me(data) {
        let reqToken = data.split('Bearer ').pop()
        let info = await jwt.verifyToken(reqToken)
        if(!info) return null
        return this.model.findByPk(info.id)
    }
}

module.exports = UsersService