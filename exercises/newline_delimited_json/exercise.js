var path = require('path')

var exercise      = require('workshopper-exercise')()
var filecheck     = require('workshopper-exercise/filecheck')
var execute       = require('workshopper-exercise/execute')
var comparestdout = require('workshopper-exercise/comparestdout')

// checks that the submission file actually exists
exercise = filecheck(exercise)

exercise.setup = function (mode, callback) {
  this.submission = this.args[0] // first arg obviously

  // default args, override if you want to pass special args to the
  // solution and/or submission, override this.setup to do this
  this.submissionArgs = Array.prototype.slice.call(1, this.args)
  this.solutionArgs   = Array.prototype.slice.call(1, this.args)

  // edit/override if you want to alter the child process environment
  this.env = { cwd: process.cwd() }

  // set this.solution if your solution is elsewhere
  if (!this.solution)
    this.solution = path.join(this.dir, './solution/package.json')
    
  this.solutionCommand   = [ '--config', this.solution, ].concat(this.solutionArgs)
  this.submissionCommand = [ '--config', this.submission ].concat(this.submissionArgs)

  process.nextTick(callback)
}

// execute the solution and submission in parallel with spawn()
exercise = execute(exercise, {exec: path.resolve(__dirname, '..', '..', 'node_modules', 'gasket', 'bin.js')})

// compare stdout of solution and submission
exercise = comparestdout(exercise)

module.exports = exercise
