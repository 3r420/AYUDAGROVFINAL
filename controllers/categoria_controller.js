const {Model } = require('sequelize');
const { QueryError } = require('sequelize');
const Sequelize = require ('sequelize');
const Categoria = require ('../models/categoria');




module.exports={

    ListarCategoria(_,res){
        return Categoria.findAll({})
        .then(Categoria=>res.status(200).send(Categoria))
        .catch(error=>res.status(400).send(error));
    },


    CreateCategoria(req, res){
        return categoria.create({
             id_categoria:req.body.id_categoria,
             descripcion: req.body.descripcion,
             titulo: req.body.titulo,
             
        })
         
        .then(categoria => res.status(200).send(categoria))
        .catch(error => res.status(400).send(error))
   },
   
}
