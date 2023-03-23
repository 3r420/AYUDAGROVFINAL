const Sequelize = require('sequelize');
const pregunta_archivo = require('../models').Pregunta_archivo;
const s = require('../models').Archivo;




module.exports = {

    Listarpregunta_archivo(req, res) {
        return pregunta_archivo.findAll({
            //include: {model:s,},require:'true',
        })
            .then(pregunta_archivo => res.status(200).send(pregunta_archivo))
            .catch(error => res.status(400).send(error));
    },


    Createpregunta_archivo(req, res) {
        return pregunta_archivo.create({
            archivo_id: req.body.archivo_id,
            pregunta_id: req.body.pregunta_id,
            


        })

        .then(pregunta_archivo => res.status(200).send(pregunta_archivo))
            .catch(error => res.status(400).send(error))
    },
    Updatepregunta_archivo(req, res) {
        return pregunta_archivo.update({
            pregunta_id: req.body.pregunta_id,
            archivo_id: req.body.archivo_id,
        }, {
            where: {
                id_pregunta_archivo: req.params.id,
            },
        })

        .then((result) => {
                res.json(result);
            })
            .catch(error => res.status(400).send(error))
    },
    Eliminarpregunta_archivo(req, res) {
        return pregunta_archivo.destroy({
            where: {
                id_pregunta_archivo: req.params.id
            }
        })

        .then(() => res.status(200).send('Eliminado'))
            .catch(error => res.status(400).send(error))
    },
    Viewpregunta_archivo(req, res) {

        return pregunta_archivo.findOne({
            where: {
                id_pregunta_archivo: req.params.id
            }
        })

        .then(pregunta_archivo => res.status(200).send(pregunta_archivo))
            .catch(error => res.status(400).send(error))
    }
}