#!/usr/bin/env node

var adventure = require('adventure')
var shop = adventure('data-plumber')

var problems = [
  'Gasket',
  'Pipe In',
  'Line Delimited JSON',
  'CSV',
  "Trim Objects",
  "JSON Streaming",
  "XML",
  "XLS"
]

// modules to consider using
// xml-json
// split
// json
// binary-csv
// gasket
// csv-join
// trim-object-stream
// json-merge
// ldjson-stream
// simplify-geojson
// csv2geojson
// JSONStream
// shapefile
// j (https://www.npmjs.org/package/j)

problems.forEach(function (prob) {
  shop.add(prob, function () { return require('./problems/' + prob.replace(/\s/ig, '_').toLowerCase()) })
})

shop.execute(process.argv.slice(2))
