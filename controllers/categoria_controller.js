const { Model } = require('sequelize');
const { QueryError } = require('sequelize');
const Sequelize = require('sequelize');
const categoria = require('../models').Categoria;
//const subcategoria =require('../models/').Subcategoria;




module.exports = {

    ListarCategoria(req, res) {
        return categoria.findAll({
            // include: {model:subcategoria,},require:'true',
        })


        .then(categoria => res.status(200).send(categoria))
            .catch(error => res.status(400).send(error.toString()))
    },


    CreateCategoria(req, res) {
        return categoria.create({
            descripcion: req.body.descripcion,
            titulo: req.body.titulo,

        })

        .then(categoria => res.status(200).send(categoria))
            .catch(error => res.status(400).send(error))
    },
    UpdateCategoria(req, res) {
        return categoria
            .update({
                descripcion: req.body.descripcion,
                titulo: req.body.titulo,
            }, {
                where: {
                    id_categoria: req.params.id,
                },
            })

        .then((result) => {
                res.json(result);
            })
            .catch(error => res.status(400).send(error))
    },
    EliminarCategoria(req, res) {
        return categoria.destroy({
            where: {
                id_categoria: req.params.id
            }
        })

        .then(() => res.status(200).send('Eliminado'))
            .catch(error => res.status(400).send(error))
    },
    ViewCategoria(req, res) {

        return categoria.findOne({
            where: {
                id_categoria: req.params.id
            }
        })

        .then(categoria => res.status(200).send(categoria))
            .catch(error => res.status(400).send(error))
    }


}