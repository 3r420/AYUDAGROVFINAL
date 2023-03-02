const Sequelize = require('sequelize');
const archivo = require('../models/archivo');




module.exports={

    ListarArchivo(req,res){
        return archivo.findAll({})
        .then(archivo=>res.status(200).send(archivo))
        .catch(error=>res.status(400).send(error));
    },


    CreateArchivo(req, res){
        return archivo.create({
             id_archivo:req.body.id_archivo,
             nombre_archivo: req.body.nombre_archivo,
             url: req.body.url,
             
        })
         
        .then(categoria => res.status(200).send(categoria))
        .catch(error => res.status(400).send(error))
   },
   
}
