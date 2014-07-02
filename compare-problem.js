var fs = require('fs')
var os = require('os')
var path = require('path')
var child = require('child_process')
var ansimd = require('ansimd')
var compare = require('./compare.js')

var spawn = child.spawn
if (os.type() === 'Windows_NT') spawn = require('win-spawn')

module.exports = function(root, dataFile) {
  var dataPath = path.resolve(root, '..', '..', 'data', dataFile)
  var gasketCmd = path.resolve(root, '..', '..', 'node_modules', 'gasket', 'bin.js')
  
  var problem = {}
  
  problem.problem = ansimd(fs.readFileSync(path.join(root, 'problem.md')).toString()) + '\nRaw data file (for debugging):\n' + dataPath + '\n'
  problem.solution = "Reference solution:\n\n" + fs.readFileSync(path.join(root, 'package.json')).toString() + '\n'

  problem.verify = function (args, cb) {
    var entry = spawnEntry(args)
    var solution = spawnSolution()
    var input = fs.createReadStream(dataPath)
    input.pipe(entry.stdin)
    input.pipe(solution.stdin)
    compare(entry, solution, cb)
  }

  problem.run = function(args) {
    var entry = spawnEntry(args)
    console.error('cat', dataPath, '|', 'gasket', '--config', path.resolve(args[0]))
    entry.stdout.pipe(process.stdout)
    entry.stderr.pipe(process.stderr)
    var input = fs.createReadStream(dataPath)
    input.pipe(entry.stdin)
  }
  
  return problem

  function spawnEntry(args) {
    var entryCmd = gasketCmd
    var entryArgs = ['--config', path.resolve(args[0])]
    return spawn(entryCmd, entryArgs, {env: process.env})
  }

  function spawnSolution() {
    var solutionCmd = gasketCmd
    var solutionArgs = ['--config', path.resolve(root, 'package.json')]
    return spawn(solutionCmd, solutionArgs, {env: process.env})
  }
}

