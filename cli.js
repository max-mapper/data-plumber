#!/usr/bin/env node

var workshopper = require('workshopper')
var path        = require('path')

workshopper({
  name        : 'data-plumber',
  title       : 'DATA PLUMBER',
  exerciseDir : path.join(__dirname, 'exercises'),
  appDir      : __dirname
})
