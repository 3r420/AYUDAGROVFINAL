const Sequelize = require('sequelize');
const subcategoria = require('../models/subcategoria');




module.exports={

    ListarSubcategoria(req,res){
        return subcategoria.findAll({})
        .then(subcategoria=>res.status(200).send(subcategoria))
        .catch(error=>res.status(400).send(error));
    },


    CreateSubcategoria(req, res){
        return subcategoria.create({
             id_subcategoria:req.body.id_subcategoria,
             categoria_id:req.body.categoria_id,
             titulo: req.body.titulo,
             descripcion: req.body.descripcion
             
        })
         
        .then(subcategoria => res.status(200).send(subcategoria))
        .catch(error => res.status(400).send(error))
   },
   
}
