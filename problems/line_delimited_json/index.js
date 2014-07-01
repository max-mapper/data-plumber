var fs = require('fs')
var path = require('path')
var ansimd = require('ansimd')
var compare = require('../../compare.js')

exports.problem = ansimd(fs.readFileSync(path.join(__dirname, 'problem.md')).toString())

exports.verify = function (args, cb) {
  var gasketCmd = path.resolve(__dirname, '..', '..', 'node_modules', 'gasket', 'bin.js')
  var cmd1 = gasketCmd
  var cmd1Args = ['--config', path.resolve(args[0])]
  var cmd2 = gasketCmd
  var cmd2Args = ['--config', path.resolve(__dirname, 'package.json')]
  compare(cmd1, cmd1Args, cmd2, cmd2Args, cb)
}