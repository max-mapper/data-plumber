var jsDiff = require('diff')
var split = require('split')
var os = require('os')
var child = require('child_process')
var tuple = require('tuple-stream')
var through = require('through')
var styled = require('styled')

var spawn = child.spawn
if (os.type() === 'Windows_NT') spawn = require('win-spawn')

module.exports = function(cmd1, cmd1args, cmd2, cmd2args, cb) {
  var a = spawn(cmd1, cmd1args, {env: process.env})
  var b = spawn(cmd2, cmd2args, {env: process.env})
  var cutoff = 20
  var lines = 0
  var linesMatched = 0
  
  var tupler = tuple(a.stdout.pipe(split()), b.stdout.pipe(split()))
  
  console.log('Diff of first 20 lines below (', styled('red', 'missing'), styled('green', 'extra'), styled('grey', 'matched'), ')\n')
  
  tupler.pipe(through(function(ch) {
    lines++
    
    ch[0] = JSON.stringify(ch[0] || '')
    ch[1] = JSON.stringify(ch[1] || '')
    
    if (ch[0] === ch[1]) linesMatched++
    
    if (lines < cutoff) {
      var diff = jsDiff.diffChars(ch[1], ch[0])
    
      diff.forEach(function(part){
        var color = part.added ? 'green' : 
                    part.removed ? 'red' : 'grey'
        process.stdout.write(styled(color, part.value))
      })

      console.log('')
    }
  }, function() {
    this.queue(null)
    if (lines === linesMatched) return cb(true)
    console.log('\nOnly', linesMatched, 'of', lines, 'lines matched.\n')
    cb(false)
  }))
  
  return {a: a, b: b}
}
