var jsDiff = require('diff')
var split = require('split')
var tuple = require('tuple-stream')
var through = require('through')
var styled = require('styled')

module.exports = function(a, b, cb) {
  var cutoff = 20
  var lines = 0
  var linesMatched = 0
  
  var tupler = tuple(a.stdout.pipe(split()), b.stdout.pipe(split()))
  
  console.log('Diff of first 20 lines below (', styled('red', 'not matched'), ',', styled('green', 'matched'), ')\n')
  
  tupler.pipe(through(function(ch) {
    lines++
    
    if (ch[0] === ch[1]) linesMatched++
    
    if (lines < cutoff) {
      var diff = jsDiff.diffChars(ch[1], ch[0])
    
      diff.forEach(function(part){
        var color = 'green'
        if (part.added) color = 'red'
        if (part.removed) color = 'red'
        // var color = 'grey'
        // if (part.added) color = 'green'
        // if (part.removed) color = 'red'
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
}
