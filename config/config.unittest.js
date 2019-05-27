'use strict'

module.exports = () =>{
  const config = {}

  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: '123456',
    database: 'vinter-unittest'
  }
}