const Sequelize = require('sequelize');
const valorar_respuesta = require('../models/valorar_respuesta');





module.exports={

    ListarValorarR(req,res){
        return valorar_respuesta.findAll({})
        .then(valorar_respuesta=>res.status(200).send(valorar_respuesta))
        .catch(error=>res.status(400).send(error));
    },


    CreateValorarR(req, res){
        return valorar_respuesta.create({
             id_valorar: req.body.id_valorar,
             usuario_id:req.body.usuario_id,
             respuesta_id: req.body.respuesta_id,
             calificacion: req.body.calificacion,
             
             
             
        })
         
        .then(agricultor => res.status(200).send(agricultor))
        .catch(error => res.status(400).send(error))
   },
   
}
