const Sequelize = require('sequelize');
const respuesta = require('../models/').Respuesta;




module.exports={

    ListarRespuesta(req,res){
        
        return respuesta.findAll({})
        .then(respuesta=>res.status(200).send(respuesta))
        .catch(error=>res.status(400).send(error));
    },


    CreateRespuesta(req, res){
        return respuesta.create({
             descripcion:req.body.descripcion,
             hora_fecha: req.body.hora_fecha,
             pregunta_id: req.body.pregunta_id
             
             
        })
         
        .then(respuesta => res.status(200).send(respuesta))
        .catch(error => res.status(400).send(error))
   },
   
}
