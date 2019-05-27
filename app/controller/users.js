'use strict'

const Controller = require('egg').Controller
const code = require('../util/code')
const jwt = require('../util/jwt')

class UsersController extends Controller {
    async register() {
        const {ctx, service} = this
        const res = await service.users.register(ctx.request.body)
        if(!res) {
            ctx.errorHandle({message: code.registerFail, statusCode: 403})
        } else {
            ctx.responseHandle({message: res})
        }
    }

    async login() {
        const {ctx, service} = this
        let res = await service.users.login(ctx.request.body)
        if(!res) {
            ctx.errorHandle({message: code.loginFail, statusCode: 401})
        } else {
            ctx.responseHandle({message: {token: jwt.token(res.id, 'admin')}})
        }
    }    

    async me() {
        const {ctx, service} = this
        let res = await service.users.me(ctx.request.headers.authorization)
        if(!res) {
            ctx.notFoundHandle()
        } else {
            ctx.responseHandle({message: res})
        }
    }

    async findAll() {
        const {ctx, service} = this
        const res = await service.users.findAll(ctx.request.query)
        if(!res) {
            ctx.notFoundHandle()
        } else {
            ctx.responseHandle({message: res})
        }        
    }

    async create() {
        const {ctx, service} = this
        const res = await service.users.create(ctx.request.body)
        if(!res) {
            ctx.errorHandle({message: code.registerFail, statusCode: 403})
        } else {
            ctx.responseHandle({message: res})
        }        
    }
    
    async findOne() {
        const {ctx, service} = this
        let res = await service.users.findOne(ctx.params.id)  
        if(!res) {
            ctx.notFoundHandle()
        } else {
            ctx.responseHandle({message: res})
        }        
    }
    
    async delete() {
        const {ctx, service} = this
        let res = await service.users.delete(ctx.params.id)  
        if(!res) {
            ctx.notFoundHandle()
        } else {
            let result = await res.destroy()
            ctx.responseHandle({message: result})
        }        
    }   
    
    async update() {
        const {ctx, service} = this
        let res = await service.users.update(ctx.params.id)  
        if(!res) {
            ctx.notFoundHandle()
        } else {
            let result = await res.update(ctx.request.body)
            ctx.responseHandle({message: result})
        }
    }    
}

module.exports = UsersController