'use strict'

const app = require('./app')
const mongoose = require('mongoose')
const port = process.env.PORT || 3000

mongoose.connect('mongodb://localhost:27017/footballplayers', (err, res) => {

  if (err) throw 'MongoDB connection error'

  app.listen(3000, () => {
    console.log('Server running')
  })

})

