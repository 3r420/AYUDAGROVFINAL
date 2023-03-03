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
     ListarUsuario(req,res){
          return usuario.findAll({})
          .then(usuario=>res.status(200).send(usuario))
          .catch(error=>res.status(400).send(error));
      },  

     CreateUsuario(req, res){
          return usuario.create({
               nombre: req.body.nombre,
               apellido: req.body.apellido,
               correo_electronico:req.body.correo_electronico,
               contrasena: req.body.contrasena,
               repetir_contrasena: req.body.repetir_contrasena,
               telefono: req.body.telefono,
               direccion: req.body.direccion,
               estado: req.body.estado
          })
          
          .then(usuario => res.status(200).send(usuario))
          .catch(error => res.status(400).send(error))
     },
     UpdateUsuario(req, res){
          return usuario.update({
               nombre: req.body.nombre,
               apellido: req.body.apellido,
               correo_electronico:req.body.correo_electronico,
               contrasena: req.body.contrasena,
               repetir_contrasena: req.body.repetir_contrasena,
               telefono: req.body.telefono,
               direccion: req.body.direccion,
               estado: req.body.estado
          },
          {
               where: {
                    id: req.params.id,
               },
          }
          )
          
          .then(usuario => res.status(200).send(usuario))
          .catch(error => res.status(400).send(error))
     },

}