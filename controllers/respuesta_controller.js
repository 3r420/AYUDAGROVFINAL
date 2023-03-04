const Sequelize = require('sequelize');
const respuesta = require('../models/').Respuesta;




module.exports={

    ListarCategoria(req,res){
        console.log('si')
        return respuesta.findAll({})
        .then(respuesta=>res.status(200).send(respuesta))
        .catch(error=>res.status(400).send(error));
    },


    Createsugerencia(req, res){
        return respuesta.create({
             descripcion:req.body.descripcion,
             hora_fecha: req.body.hora_fecha,
             hora_de_publicacion: req.body.hora_de_publicacion,
             pregunta_id: req.body.pregunta_id,
             fecha_de_publicacion: req.body.fecha_de_publicacion,
             
        })
         
        .then(respuesta => res.status(200).send(respuesta))
        .catch(error => res.status(400).send(error))
   },
   
}
