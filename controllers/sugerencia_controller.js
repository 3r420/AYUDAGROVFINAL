const Sequelize = require('sequelize');
const sugerencia = require('../models').Sugerencia;
const s = require('../models').Usuario;




module.exports = {

    ListarSugerencia(req, res) {
        return sugerencia.findAll({
           // include: {model:s,},require:'true',
        })
            .then(sugerencia => res.status(200).send(sugerencia))
            .catch(error => res.status(400).send(error));
    },


    CreateSugerencia(req, res) {
        return sugerencia.create({
            subcategoria_id: req.body.subcategoria_id,
            descripcion: req.body.descripcion,
            usuario_id: req.body.usuario_id,


        })

        .then(sugerencia => res.status(200).send(sugerencia))
            .catch(error => res.status(400).send(error))
    },
    UpdateSugerencia(req, res) {
        return sugerencia.update({
            descripcion: req.body.descripcion,
        }, {
            where: {
                id_sugerencia: req.params.id,
            },
        })

        .then((result) => {
                res.json(result);
            })
            .catch(error => res.status(400).send(error))
    },
    EliminarSugerencia(req, res) {
        return sugerencia.destroy({
            where: {
                id_sugerencia: req.params.id
            }
        })

        .then(() => res.status(200).send('Eliminado'))
            .catch(error => res.status(400).send(error))
    },
    ViewSugerencia(req, res) {

        return sugerencia.findOne({
            where: {
                id_sugerencia: req.params.id
            }
        })

        .then(sugerencia => res.status(200).send(sugerencia))
            .catch(error => res.status(400).send(error))
    }
}