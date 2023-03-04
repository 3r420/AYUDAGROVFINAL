
const {Model } = require('sequelize');
const { QueryError } = require('sequelize');
const Sequelize = require ('sequelize');
const Categoria = require ('../models').Categoria;
// const Categoria =require('../models/categoria');




module.exports={

    ListarCategoria(req,res){
        console.log('yes')
        return Categoria.findAll({
       })
                
   
        .then(Categoria => res.status(200).send(Categoria))
        .catch(error => res.status(400).send(error.toString()))
   },


    CreateCategoria(req, res){
        return Categoria.create({
             descripcion: req.body.descripcion,
             titulo: req.body.titulo,
             
        })
         
        .then(categoria => res.status(200).send(categoria))
        .catch(error => res.status(400).send(error))
   },

   
   UpdateUsuario(req, res){
     return Categoria.update({
          descripcion: req.body.descripcion,
          titulo: req.body.titulo,
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
EliminarUsuario(req,res) {
     return Categoria.destroy({
          where: {
               id: req.params.id
          }
     }
     )

     .then(usuario => res.status(200).send(usuario))
     .catch(error => res.status(400).send(error))
},

}
