'use strict'

const jwt = require('jsonwebtoken')
const config = require('../util/key')

// 生成token
const token = (id, role) => {
    return jwt.sign({id: id, role: role}, config.secretKey, {expiresIn: config.expiresIn})
}

//  解析token
const verifyToken = token => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, config.secretKey, (err, decoded) => {
            if(err) return resolve(null)
            resolve(decoded)
        })
    })
}

module.exports = {
    token,
    verifyToken
}