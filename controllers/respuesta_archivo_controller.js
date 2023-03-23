const Sequelize = require('sequelize');
const respuesta_archivo = require('../models').Respuesta_archivo;
const s = require('../models').Respuesta;




module.exports = {

    Listarrespuesta_archivo(req, res) {
        return respuesta_archivo.findAll({
            include: {model:s,},require:'true',
        })
            .then(respuesta_archivo => res.status(200).send(respuesta_archivo))
            .catch(error => res.status(400).send(error));
    },


    Createrespuesta_archivo(req, res) {
        return respuesta_archivo.create({
            archivo_id: req.body.archivo_id,
            respuesta_id: req.body.respuesta_id,
            


        })

        .then(respuesta_archivo => res.status(200).send(respuesta_archivo))
            .catch(error => res.status(400).send(error))
    },
    Updaterespuesta_archivo(req, res) {
        return respuesta_archivo.update({
            respuesta_id: req.body.respuesta_id,
            archivo_id: req.body.archivo_id,
        }, {
            where: {
                id_respuesta_archivo: req.params.id,
            },
        })

        .then((result) => {
                res.json(result);
            })
            .catch(error => res.status(400).send(error))
    },
    Eliminarrespuesta_archivo(req, res) {
        return respuesta_archivo.destroy({
            where: {
                id_respuesta_archivo: req.params.id
            }
        })

        .then(() => res.status(200).send('Eliminado'))
            .catch(error => res.status(400).send(error))
    },
    Viewrespuesta_archivo(req, res) {

        return respuesta_archivo.findOne({
            where: {
                id_respuesta_archivo: req.params.id
            }
        })

        .then(respuesta_archivo => res.status(200).send(respuesta_archivo))
            .catch(error => res.status(400).send(error))
    }
}