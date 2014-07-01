var jsDiff = require('diff')
var split = require('split')
var child = require('child_process')
var tuple = require('tuple-stream')
var through = require('through')
var styled = require('styled')

module.exports = function(cmd1, cmd1args, cmd2, cmd2args, cb) {
  var a = child.spawn(cmd1, cmd1args, {env: process.env})
  var b = child.spawn(cmd2, cmd2args, {env: process.env})
  var lines = 0
  var linesMatched = 0
  
  var tupler = tuple(a.stdout.pipe(split()), b.stdout.pipe(split()))
  
  console.log('Diff of output below (', styled('red', 'missing'), styled('green', 'extra'), styled('grey', 'matched'), ')\n')
  
  tupler.pipe(through(function(ch) {
    lines++
    
    ch[0] = JSON.stringify(ch[0])
    ch[1] = JSON.stringify(ch[1])
    
    if (ch[0] === ch[1]) linesMatched++
    
    var diff = jsDiff.diffChars(ch[1], ch[0])
    
    diff.forEach(function(part){
      var color = part.added ? 'green' : 
                  part.removed ? 'red' : 'grey'
      process.stdout.write(styled(color, part.value))
    })
    console.log('')
  }, function() {
    this.queue(null)
    if (lines === linesMatched) return cb(true)
    console.log('\nOnly', linesMatched, 'of', lines, 'lines matched.\n')
    cb(false)
  }))

}
