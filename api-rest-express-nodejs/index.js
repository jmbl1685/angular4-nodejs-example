'use strict'

const app = require ('./app'),
      mongoose = require ('mongoose'),
      port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/Futbolistas',function(err,res){

  if (err) throw 'Error: No se ha podido establecer conexión con la base de datos'

  app.listen(3000,()=>{
    console.log('Conectado a MongoDB + Servidor iniciado')
  })

})

