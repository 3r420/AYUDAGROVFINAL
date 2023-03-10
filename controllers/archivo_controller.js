const {Model } = require('sequelize');
const { QueryError } = require('sequelize');
const Sequelize = require ('sequelize');
const archivo = require ('../models').Archivo;




module.exports={

    ListarArchivo(_,res){
        return archivo.findAll({})
        .then(archivo=>res.status(200).send(archivo))
        .catch(error=>res.status(400).send(error));
    },


    CreateArchivo(req, res){
        return archivo.create({
             id_archivo:req.body.id_archivo,
             nombre_archivo: req.body.nombre_archivo,
             url: req.body.url
             
        })
         
        .then(archivo => res.status(200).send(archivo))
        .catch(error => res.status(400).send(error))
   },
   
}
