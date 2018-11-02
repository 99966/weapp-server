const { resolve } = require('path')

const host = process.env.HOST || 'localhost'
const env = process.env.NODE_ENV || 'development'
const conf = require(resolve(__dirname, `./${env}.json`))