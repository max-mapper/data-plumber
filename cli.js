#!/usr/bin/env node

var adventure = require('adventure')
var shop = adventure('data-plumber')

var problems = [
  'Gasket',
  'Line Delimited JSON'
]

problems.forEach(function (prob) {
  shop.add(prob, function () { return require('./problems/' + prob.replace(/\s/ig, '_').toLowerCase()) })
})

shop.execute(process.argv.slice(2))
