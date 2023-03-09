const { QueryError } = require('sequelize');
const Sequelize = require('sequelize');
const pregunta = require('../models').Pregunta;

module.exports={
     ListarPregunta(req,res){
          return pregunta.findAll({})
          .then(pregunta=>res.status(200).send(pregunta))
          .catch(error=>res.status(400).send(error));
      },  

     CreatePregunta(req, res){
          return pregunta.create({
               descripcion: req.body.descripcion,
               hora_fecha: req.body.hora_fecha,
          })
          
          .then(pregunta => res.status(200).send(pregunta))
          .catch(error => res.status(400).send(error))
     },
     UpdatePregunta(req, res){
          return pregunta.update({
            descripcion: req.body.descripcion,
            hora_fecha: req.body.hora_fecha,
          },
          {
               where: {
                    id: req.params.id,
               },
          }
          )
          
          .then(pregunta => res.status(200).send(pregunta))
          .catch(error => res.status(400).send(error))
     },
     EliminarPregunta(req,res) {
          return pregunta.destroy({
               where: {
                    id: req.params.id
               }
          }
          )

          .then(pregunta => res.status(200).send(pregunta))
          .catch(error => res.status(400).send(error))
     },

}