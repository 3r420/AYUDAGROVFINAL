const { QueryError } = require('sequelize');
const Sequelize = require('sequelize');
const pregunta = require('../models').pregunta;
const rol = require('../models').rol;
const categoria = require('../models').categoria
const usuario = require('../models').usuario;
const archivo = require('../models').archivo
const sugerencia=require('../models').sugerencia
const subcategoria =require('../models').categoria;

module.exports={
     
 Listdetalle_Agricultor(req,res){
          return agricultor.findAll({  include: {
               model:detalleCultivo,
             },
             require:'true',
         })
                  
     
          .then(pregunta => res.status(200).send(pregunta))
          .catch(error => res.status(400).send(error.toString()))
     },

List(_,res){
              return agricultor.findAll({})
              .then(agricultor => res.status(200).send(agricultor))
              .catch(error => res.status(400).send(error));
},
ListAt(req,res){
              return agricultor.findAll({
                            where: {
                                 id: req.params.id
                            }
              })
              .then(agricultor => res.status(200).send(agricultor))
              .catch(error => res.status(400).send(error))

},
CreateAgricultor(req, res){
     return agricultor.create({
          idRol:req.body.idRol,
          nombre: req.body.nombre,
          apellido: req.body.apellido,
          nickName:req.body.nickName,
          PassWorld: req.body.PassWorld,
          Email: req.body.Email,
          direccion: req.body.direccion
     })
      
     .then(agricultor => res.status(200).send(agricultor))
     .catch(error => res.status(400).send(error))
},

}