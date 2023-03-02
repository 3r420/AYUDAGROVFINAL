const Sequelize = require('sequelize');
const sugerencia = require('../models/sugerencia');




module.exports={

    ListarCategoria(req,res){
        return sugerencia.findAll({})
        .then(sugerencia=>res.status(200).send(sugerencia))
        .catch(error=>res.status(400).send(error));
    },


    Createsugerencia(req, res){
        return sugerencia.create({
             id_sugerencia:req.body.id_sugerencia,
             descripcion: req.body.descripcion,
             titulo: req.body.titulo,
             
        })
         
        .then(sugerencia => res.status(200).send(sugerencia))
        .catch(error => res.status(400).send(error))
   },
   
}
