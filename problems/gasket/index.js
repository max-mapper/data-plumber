var fs = require('fs')
var os = require('os')
var path = require('path')
var child = require('child_process')
var ansimd = require('ansimd')
var compare = require('../../compare.js')

var spawn = child.spawn
if (os.type() === 'Windows_NT') spawn = require('win-spawn')

var gasketCmd = path.resolve(__dirname, '..', '..', 'node_modules', 'gasket', 'bin.js')

exports.problem = ansimd(fs.readFileSync(path.join(__dirname, 'problem.md')).toString())
exports.solution = "Reference solution:\n\n" + fs.readFileSync(path.join(__dirname, 'package.json')).toString() + '\n'

exports.verify = function(args, cb) {
  var entry = spawnEntry(args)
  var solution = spawnSolution()
  compare(entry, solution, cb)
}

exports.run = function(args) {
  var entry = spawnEntry(args)
  console.error('gasket', 'run', '--config', path.resolve(args[0]))
  entry.stdout.pipe(process.stdout)
  entry.stderr.pipe(process.stderr)
}

function spawnEntry(args) {
  var entryCmd = gasketCmd
  var entryArgs = ['run', '--config', path.resolve(args[0])]
  return spawn(entryCmd, entryArgs, {env: process.env})
}

function spawnSolution() {
  var solutionCmd = gasketCmd
  var solutionArgs = ['run', '--config', path.resolve(__dirname, 'package.json')]
  return spawn(solutionCmd, solutionArgs, {env: process.env})
}
