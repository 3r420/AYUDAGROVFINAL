const { Model } = require('sequelize');
const { QueryError } = require('sequelize');
const Sequelize = require('sequelize');
const archivo = require('../models').Archivo;




module.exports = {

    ListarArchivo(_, res) {
        return archivo.findAll({})
            .then(archivo => res.status(200).send(archivo))
            .catch(error => res.status(400).send(error));
    },


    CreateArchivo(req, res) {
        return archivo.create({
            nombre_archivo: req.body.nombre_archivo,
            url: req.body.url

        })

        .then(archivo => res.status(200).send(archivo))
            .catch(error => res.status(400).send(error))
    },
    UpdateArchivo(req, res) {
        return archivo
            .update({
                nombre_archivo: req.body.nombre_archivo,
                url: req.body.url,
            }, {
                where: {
                    id_archivo: req.params.id,
                },
            })

        .then((result) => {
                res.json(result);
            })
            .catch(error => res.status(400).send(error))
    },
    EliminarArchivo(req, res) {
        return archivo.destroy({
            where: {
                id_archivo: req.params.id
            }
        })

        .then(() => res.status(200).send('Eliminado'))
            .catch(error => res.status(400).send(error))
    },
    ViewArchivo(req, res) {

        return archivo.findOne({
            where: {
                id_archivo: req.params.id
            }
        })

        .then(archivo => res.status(200).send(archivo))
            .catch(error => res.status(400).send(error))
    }

}