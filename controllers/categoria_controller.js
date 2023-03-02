const Sequelize = require('sequelize');
const categoria = require('../models/categoria');




module.exports={

    Listarcategoria(req,res){
        return categoria.findAll({})
        .then(categoria=>res.status(200).send(categoria))
        .catch(error=>res.status(400).send(error));
    },


    CreateCategoria(req, res){
        return categoria.create({
             id_categoria:req.body.id_categoria,
             descripcion: req.body.descripcion,
             titulo: req.body.titulo,
             
        })
         
        .then(agricultor => res.status(200).send(agricultor))
        .catch(error => res.status(400).send(error))
   },
   
}
