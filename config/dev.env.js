'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    API_URL: 'http://localhost:8000/api/country',
    NODE_ENV: '"development"'
})
