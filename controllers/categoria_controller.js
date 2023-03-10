
const {Model } = require('sequelize');
const { QueryError } = require('sequelize');
const Sequelize = require ('sequelize');
const categoria = require ('../models').Categoria;
// const Categoria =require('../models/categoria');




module.exports={

    ListarCategoria(req,res){
        console.log('yes')
        return categoria.findAll({
       })
                
   
        .then(categoria => res.status(200).send(categoria))
        .catch(error => res.status(400).send(error.toString()))
   },


    CreateCategoria(req, res){
        return categoria.create({
             descripcion: req.body.descripcion,
             titulo: req.body.titulo,
             
        })
         
        .then(categoria => res.status(200).send(categoria))
        .catch(error => res.status(400).send(error))
   },

   
   UpdateUsuario(req, res){
     return categoria.update({
          descripcion: req.body.descripcion,
          titulo: req.body.titulo,
     },
     {
          where: {
               id: req.params.id,
          },
     }
     )
     
     .then(categoria => res.status(200).send(categoria))
     .catch(error => res.status(400).send(error))
},
EliminarUsuario(req,res) {
     return categoria.destroy({
          where: {
               id: req.params.id
          }
     }
     )

     .then(categoria => res.status(200).send(categoria))
     .catch(error => res.status(400).send(error))
},

}
