'use strict'

const express = require('express')
const routes = express.Router()
const futbolistaController = require ('.././controllers/futbolistaController')

routes.get('/futbolistas',futbolistaController.getFutbolistas)
routes.get('/futbolista/:id',futbolistaController.getFutbolista)
routes.post('/futbolista',futbolistaController.saveFutbolista)
routes.put('/futbolista/:id',futbolistaController.updateFutbolista)
routes.delete('/futbolista/:id',futbolistaController.deleteFutbolista)

module.exports = routes