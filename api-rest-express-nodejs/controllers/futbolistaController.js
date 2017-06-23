'use strict'

const Futbolista = require ('.././models/futbolista')

function getFutbolistas (req,res){

  Futbolista.find({}).sort('_id').exec((err,data)=>{

    if (err){
      res.status(500).send({
        alert : 'Error al guardar el fútbolista'
      })
    }

    if (!data){
      res.status(404).send({
        alert : 'No hay fútbolista almacendos en la base de datos'
      })
    }

    res.status(200).send({
      data
    })

  })
}

function getFutbolista (req,res){
   
  const id = req.params.id;

  Futbolista.findById(id,(err,data)=>{

    if (err){
      res.status(500).send({
        alert : 'El id del fútbolista no ha sido encontrado'
      })
    }

    if (!data){
      res.status(404).send({
        alert : 'No hay fútbolista almacendos en la base de datos'
      })
    }

    res.status(200).send({
      data
    })

  })

}

function saveFutbolista (req,res){
  
  const futbolista = new Futbolista();

  futbolista.nombre = req.body.nombre;
  futbolista.posicion = req.body.posicion;
  futbolista.equipo = req.body.equipo;
  futbolista.nacionalidad = req.body.nacionalidad;
  futbolista.dorsal = req.body.dorsal;
  futbolista.imagenUrl = req.body.imagenUrl;


  futbolista.save((err,data)=>{
    if (err){
      res.status(500).send({
        alert : 'Error al guardar el fútbolista'
      })
    }

    res.status(200).send({
      futbolista : data
    })

  })

}

function updateFutbolista (req,res){
  
  const id = req.params.id;

  Futbolista.findByIdAndUpdate(id,req.body,(err,data)=>{

    if (err){
      res.status(500).send({
        alert : 'El id del fútbolista no ha sido actualizado'
      })
    }

    if (!data){
      res.status(404).send({
        alert : 'No hay fútbolista almacendos en la base de datos'
      })
    }

    res.status(200).send({
      JugadorActualizado :data
    })

  })

}

function deleteFutbolista (req,res){
  
  const id = req.params.id;

  Futbolista.findByIdAndUpdate(id,req.body,(err,data)=>{

    if (err){
      res.status(500).send({
        alert : 'El id del fútbolista no ha sido borrado'
      })
    }

    if (!data){
      res.status(404).send({
        alert : 'No hay fútbolista almacendos en la base de datos'
      })
    }else{
      data.remove((err =>{
        if(!err){
          res.status(200).send({
          JugadorEliminado :data
          })
        }
      }))
    }

    

  })

}

module.exports = {
  getFutbolista,
  getFutbolistas,
  saveFutbolista,
  updateFutbolista,
  deleteFutbolista
}