const { QueryError } = require('sequelize');
const Sequelize = require('sequelize');
const usuario = require('../models').Usuario;
const rol = require('../models').Rol;


module.exports = {
    ListarUsuario(req, res) {
        return usuario.findAll({
          
        })
            .then(usuario => res.status(200).send(usuario))
            .catch(error => res.status(400).send(error));
    },
    
    ListarUsuarioPorRol(req, res) {
        return usuario.findAll({
            include: {model:rol,},require:'true',
        })
            .then(usuario => res.status(200).send(usuario))
            .catch(error => res.status(400).send(error));
    },

    CreateUsuario(req, res) {
        return usuario.create({
            rol_id:req.body.rol_id,
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
            rol_id:req.body.rol_id,
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