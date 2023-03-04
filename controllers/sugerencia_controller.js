const Sequelize = require('sequelize');
const sugerencia = require('../models').Sugerencia;




module.exports={

    ListarSugerencia(req,res){
        return sugerencia.findAll({})
        .then(sugerencia=>res.status(200).send(sugerencia))
        .catch(error=>res.status(400).send(error));
    },


    CreateSugerencia(req, res){
        return sugerencia.create({
             //id_sugerencia:req.body.id_sugerencia,
             subcategorias_id:req.body.subcategorias_id,
             descripcion: req.body.descripcion,
             usuario_id:req.body.usuario_id,
            
             
        })
         
        .then(sugerencia => res.status(200).send(sugerencia))
        .catch(error => res.status(400).send(error))
   },
   
}
