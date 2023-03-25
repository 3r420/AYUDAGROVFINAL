const { Model } = require('sequelize');
const { QueryError } = require('sequelize');
const Sequelize = require('sequelize');
const subcategoria = require('../models').Subcategoria;
const categoria = require('../models').Categoria


module.exports = {

    ListarSubcategoria(req, res) {
  
        return subcategoria.findAll({
           
        })


        .then(subcategoria => res.status(200).send(subcategoria))
            .catch(error => res.status(400).send(error.toString()))
    },
    ListarSubcategoriaxCategoria(req, res) {
  
        return subcategoria.findAll({
           include: {model:categoria,},require:'true',
        })


        .then(subcategoria => res.status(200).send(subcategoria))
            .catch(error => res.status(400).send(error.toString()))
    },


    CreateSubcategoria(req, res) {
        return subcategoria.create({
            descripcion: req.body.descripcion,
            categoria_id: req.body.categoria_id,
            titulo: req.body.titulo

        })

        .then(subcategoria => res.status(200).send(subcategoria))
            .catch(error => res.status(400).send(error))
    },
    UpdateSubcategoria(req, res) {
        return subcategoria
            .update({
                categoria_id: req.body.categoria_id,
                descripcion: req.body.descripcion, 
                titulo: req.body.titulo,

            }, {
                where: {
                    id_subcategoria: req.params.id,
                },
            })

        .then((result) => {
                res.json(result);
            })
            .catch(error => res.status(400).send(error))
    },
    EliminarSubcategoria(req, res) {
        return subcategoria.destroy({
            where: {
                id_subcategoria: req.params.id
            }
        })

        .then(() => res.status(200).send('Eliminado'))
            .catch(error => res.status(400).send(error))
    },
    ViewSubcategoria(req, res) {

        return subcategoria.findOne({
            where: {
                id_subcategoria: req.params.id
            }
        })

        .then(subcategoria => res.status(200).send(subcategoria))
            .catch(error => res.status(400).send(error))
    }


}