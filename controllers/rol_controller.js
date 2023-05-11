const Sequelize = require('sequelize');
const rol = require('../models').Rol;




module.exports = {

    ListarRol(req, res) {
        return rol.findAll({
            // include: {model:preguntaArchivo,},require:'true',
        })
            .then(rol => res.status(200).send(rol))
            .catch(error => res.status(400).send(error));
    },


    CreateRol(req, res) {
        return rol.create({
            nombre: req.body.nombre,


        })

        .then(rol => res.status(200).send(rol))
            .catch(error => res.status(400).send(error))
    },
    UpdateRol(req, res) {
        return rol.update({
            nombre: req.body.nombre,
        }, {
            where: {
                id_rol: req.params.id,
            },
        })

        .then((result) => {
                res.json(result);
            })
            .catch(error => res.status(400).send(error))
    },
    EliminarRol(req, res) {
        return rol.destroy({
            where: {
                id_rol: req.params.id
            }
        })

        .then(() => res.status(200).send('Eliminado'))
            .catch(error => res.status(400).send(error))
    },
    ViewRol(req, res) {

        return rol.findOne({
            where: {
                id_rol: req.params.id
            }
        })

        .then(rol => res.status(200).send(rol))
            .catch(error => res.status(400).send(error))
    },
    async eliminarRol(req, res) {
        
          await rol.destroy({
            where: {
              id_rol: req.params.id
            }
          }).then(()=>res.status(200).send('eliminado'))
        //   if (numDeleted > 0) {
        //     res.status(200).send('Eliminado');
        //   } else {
        //     res.status(404).send('El registro no existe');
        //     console.log("si"+ numDeleted)
        //   }
         .catch (error => 
          res.status(400).send(error.message))
        
      }
}