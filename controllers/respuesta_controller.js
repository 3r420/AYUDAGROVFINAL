const Sequelize = require('sequelize');
const respuesta = require('../models/').Respuesta;




module.exports = {

    ListarRespuesta(req, res) {

        return respuesta.findAll({})
            .then(respuesta => res.status(200).send(respuesta))
            .catch(error => res.status(400).send(error));
    },


    CreateRespuesta(req, res) {
        return respuesta.create({
            descripcion: req.body.descripcion,
            hora_fecha: req.body.hora_fecha,
            hora_de_publicacion: req.body.hora_de_publicacion,
            fecha_de_publicacion: req.body.fecha_de_publicacion,
            pregunta_id: req.body.pregunta_id


        })

        .then(respuesta => res.status(200).send(respuesta))
            .catch(error => res.status(400).send(error))
    },
    UpdateRespuesta(req, res) {
        return respuesta.update({
            descripcion: req.body.descripcion,
            hora_fecha: req.body.hora_fecha,
            hora_de_publicacion: req.body.hora_de_publicacion,
            fecha_de_publicacion: req.body.fecha_de_publicacion,
        }, {
            where: {
                id_respuesta: req.params.id,
            },
        })

        .then((result) => {
                res.json(result);
            })
            .catch(error => res.status(400).send(error))
    },
    EliminarRespuesta(req, res) {
        return respuesta.destroy({
            where: {
                id_respuesta: req.params.id
            }
        })

        .then(() => res.status(200).send('Eliminado'))
            .catch(error => res.status(400).send(error))
    },
    ViewRespuesta(req, res) {

        return respuesta.findOne({
            where: {
                id_respuesta: req.params.id
            }
        })

        .then(respuesta => res.status(200).send(respuesta))
            .catch(error => res.status(400).send(error))
    }
}