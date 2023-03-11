const { QueryError } = require('sequelize');
const Sequelize = require('sequelize');
const usuario = require('../models').Usuario;

module.exports = {
    ListarUsuario(req, res) {
        return usuario.findAll({})
            .then(usuario => res.status(200).send(usuario))
            .catch(error => res.status(400).send(error));
    },

    CreateUsuario(req, res) {
        return usuario.create({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            correo_electronico: req.body.correo_electronico,
            contrasena: req.body.contrasena,
            repetir_contrasena: req.body.repetir_contrasena,
            telefono: req.body.telefono,
            direccion: req.body.direccion,
            estado: req.body.estado
        })

        .then(usuario => res.status(200).send(usuario))
            .catch(error => res.status(400).send(error))

    },
    UpdateUsuario(req, res) {
        return usuario.update({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            correo_electronico: req.body.correo_electronico,
            contrasena: req.body.contrasena,
            repetir_contrasena: req.body.repetir_contrasena,
            telefono: req.body.telefono,
            direccion: req.body.direccion,
            estado: req.body.estado
        }, {
            where: {
                id_usuario: req.params.id,
            },
        })

        .then((result) => {
                res.json(result);
            })
            .catch(error => res.status(400).send(error))
    },
    EliminarUsuario(req, res) {
        return usuario.destroy({
            where: {
                id_usuario: req.params.id
            }
        })

        .then(() => res.status(200).send('Eliminado'))
            .catch(error => res.status(400).send(error))
    },
    ViewUsuario(req, res) {

        return usuario.findOne({
            where: {
                id_usuario: req.params.id
            }
        })

        .then(usuario => res.status(200).send(usuario))
            .catch(error => res.status(400).send(error))
    }
}