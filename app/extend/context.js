'use strict'

const code = require('../util/code')

module.exports = {
    responseHandle({message, statusCode = 200}) {
        this.body = message
        this.status = statusCode
    },
    
    errorHandle({message, statusCode = 500}) {
        this.body = message
        this.status = statusCode
    },
    
    notFoundHandle({message, statusCode = 404}) {
        this.body = code.notFound
        this.status = statusCode
    },
    
    deleteHandle({message, statusCode = 204}) {
        this.status = statusCode
    }  
}