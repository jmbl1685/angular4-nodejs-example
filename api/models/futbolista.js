'use strict'

const mongoose = require ('mongoose'),
      Schema = mongoose.Schema

const futbolistaSchema = Schema({
  nombre : String,
  posicion : String,
  equipo : String,
  nacionalidad : String,
  dorsal : Number,
  imagenUrl : String
})

module.exports = mongoose.model ('Futbolista',futbolistaSchema)