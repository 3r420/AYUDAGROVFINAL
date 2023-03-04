const Sequelize = require('sequelize');
const rol = require('../models/rol');




module.exports={

    ListarRol(req,res){
        return rol.findAll({})
        .then(rol=>res.status(200).send(rol))
        .catch(error=>res.status(400).send(error));
    },


    CreateRol(req, res){
        return rol.create({
             id_rol:req.body.id_rol,
             nombre: req.body.nombre,
             
             
        })
         
        .then(agricultor => res.status(200).send(agricultor))
        .catch(error => res.status(400).send(error))
   },
   
}
