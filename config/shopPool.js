const mySql = require("promise-mysql")

const pool = mySql.createPool({
    host:'localhost',
    user:'root',
    password:'root',
    database:'hanfu',
    connectionLimit:10
})

module.exports = pool