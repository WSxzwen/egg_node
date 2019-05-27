'use strict'

module.exports = app => {
    const { STRING, INTEGER, DATE, TEXT } = app.Sequelize
    const model = app.model.define('users', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        username: STRING,
        password: STRING,
        birthday: STRING,
        sex: STRING,
        phone: STRING,
        email: STRING,
        abstract: TEXT
    })
    return model;
}