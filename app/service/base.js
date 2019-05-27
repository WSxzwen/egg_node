'use strict'

const Service = require('egg').Service

class BaseService extends Service {
    constructor(ctx, model) {
        super(ctx)
        this.model = model
    }  
    
    async findAll(data) {
        let where = JSON.parse(data.where)
        let offsets = (where.page - 1) * where.limit
        return this.model.findAndCountAll({limit: where.limit, offset: offsets, order: [['created_at', 'DESC']]})
    }

    async create(data) {
        let res = await this.model.findOne({
            where: {username: data.username}
        })
        if(!res) return this.model.create(data)
        return null        
    }
    
    async findOne(id) {
        return this.model.findByPk(id)
    }
    
    async delete(id) {
        return this.model.findByPk(id)
    }   
    
    async update(id) {
        return this.model.findByPk(id)
    }    
}

module.exports = BaseService