const Sequelize = require('sequelize');
const valorar_respuesta = require('../models/valorar_respuesta');





module.exports = {

    ListarValorarR(req, res) {
        return valorar_respuesta.findAll({})
            .then(valorar_respuesta => res.status(200).send(valorar_respuesta))
            .catch(error => res.status(400).send(error));
    },


    CreateValorarR(req, res) {
        return valorar_respuesta.create({
            usuario_id: req.body.usuario_id,
            respuesta_id: req.body.respuesta_id,
            calificacion: req.body.calificacion,



        })

        .then(valorar_respuesta => res.status(200).send(valorar_respuesta))
            .catch(error => res.status(400).send(error))
    },
    UpdateValorarR(req, res) {
        return valorar_respuesta.update({
            calificacion: req.body.calificacion,
        }, {
            where: {
                id_valorar: req.params.id,
            },
        })

        .then((result) => {
                res.json(result);
            })
            .catch(error => res.status(400).send(error))
    },
    EliminarValorarR(req, res) {
        return valorar_respuesta.destroy({
            where: {
                id_valorar: req.params.id
            }
        })

        .then(() => res.status(200).send('Eliminado'))
            .catch(error => res.status(400).send(error))
    },
    ViewValorarR(req, res) {

        return valorar_respuesta.findOne({
            where: {
                id_valorar: req.params.id
            }
        })

        .then(valorar_respuesta => res.status(200).send(valorar_respuesta))
            .catch(error => res.status(400).send(error))
    }

}