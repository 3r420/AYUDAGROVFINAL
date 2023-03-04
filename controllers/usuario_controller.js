const { QueryError } = require('sequelize');
const Sequelize = require('sequelize');
const usuario = require('../models').Usuario;

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
          const id_quellega = 1

          const respuesta = usuario.findOne({where: {id_usuario : id_quellega}})
          // .then(
          //      usuario => {
          //           // console.log(usuario.dataValues.nombre);
          //           usuario.dataValues.nombre = req.body.nombre
          //           respuesta = usuario.dataValues
          //           console.log("-----");
          //           respuesta.save()
          //           console.log("-----");
          //           return res.status(200).send(usuario.dataValues)
          //      }
          //      )
          // .catch(error => res.status(400).send(error))
          respuesta.nombre = req.body.nombre
          respuesta.save();
          return "se guardó"

               
               respuesta.correo_electronico = req.body.correo_electronico
               respuesta.contrasena = req.body.contrasena
               respuesta.repetir_contrasena = req.body.repetir_contrasena
               respuesta.telefono = req.body.telefono
               respuesta.direccion = req.body.direccion
               respuesta.estado = req.body.estado 
               // respuesta.save()
               return respuesta
               try{

               } catch(error){
                    return res.status(400).json({error})
               }
          // .then(resp => {console.log(resp);})
          // .catch(err => {console.log(err);})

          // return usuario.update({

               

          //      nombre: req.body.nombre,
          //      apellido: req.body.apellido,
          //      correo_electronico:req.body.correo_electronico,
          //      contrasena: req.body.contrasena,
          //      repetir_contrasena: req.body.repetir_contrasena,
          //      telefono: req.body.telefono,
          //      direccion: req.body.direccion,
          //      estado: req.body.estado
          // },
          // {
          //      where: {
          //           id: req.params.id,
          //      },
          // }
          // )
          
          // .then(usuario => res.status(200).send(usuario))
          // .catch(error => res.status(400).send(error))
     },
     EliminarUsuario(req,res) {
          return usuario.destroy({
               where: {
                    id: req.params.id
               }
          }
          )

          .then(usuario => res.status(200).send(usuario))
          .catch(error => res.status(400).send(error))
     },

}