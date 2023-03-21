const Sequelize = require('sequelize');
const sugerencia_archivo = require('../models').Sugerencia_archivo;
const s = require('../models').Archivo;




module.exports = {

    Listarsugerencia_archivo(req, res) {
        return sugerencia_archivo.findAll({
            include: {model:s,},require:'true',
        })
            .then(sugerencia_archivo => res.status(200).send(sugerencia_archivo))
            .catch(error => res.status(400).send(error));
    },


    Createsugerencia_archivo(req, res) {
        return sugerencia_archivo.create({
            archivo_id: req.body.archivo_id,
            sugerencia_id: req.body.sugerencia_id,
            


        })

        .then(sugerencia_archivo => res.status(200).send(sugerencia_archivo))
            .catch(error => res.status(400).send(error))
    },
    Updatesugerencia_archivo(req, res) {
        return sugerencia_archivo.update({
            sugerencia_id: req.body.sugerencia_id,
            archivo_id: req.body.archivo_id,
        }, {
            where: {
                id_sugerencia_archivo: req.params.id,
            },
        })

        .then((result) => {
                res.json(result);
            })
            .catch(error => res.status(400).send(error))
    },
    Eliminarsugerencia_archivo(req, res) {
        return sugerencia_archivo.destroy({
            where: {
                id_sugerencia_archivo: req.params.id
            }
        })

        .then(() => res.status(200).send('Eliminado'))
            .catch(error => res.status(400).send(error))
    },
    Viewsugerencia_archivo(req, res) {

        return sugerencia_archivo.findOne({
            where: {
                id_sugerencia_archivo: req.params.id
            }
        })

        .then(sugerencia_archivo => res.status(200).send(sugerencia_archivo))
            .catch(error => res.status(400).send(error))
    }
}