const { QueryError } = require('sequelize');
const Sequelize = require('sequelize');
const pregunta = require('../models').Pregunta;
const sub = require('../models').Subcategoria;
const usuario =require('../models').Usuario;

module.exports = {
   ListarPregunta(req, res) {
        return pregunta.findAll({
           //  include: {model:pr,},require:'true',
        })
            .then(pregunta => res.status( 200).send(pregunta))
            .catch(error => res.status(400).send(error));
    },
 //listar la pregunta por nombre de user
    ListarPreguntaNombreUsuario(req, res) {
        return pregunta.findAll({
            include:{
                model:usuario,
               
            }
        
            
          })
            .then(pregunta => res.status( 200).send(pregunta))
            .catch(error => res.status(400).send(error));
    },
    ListarPreguntaNombreUsuariosId(req, res) {
        return pregunta.findOne({
            include:{model:usuario},
            where:{id_pregunta:req.params.id}
            
          })
            .then(pregunta => res.status( 200).send(pregunta))
            .catch(error => res.status(400).send(error));
    },
  //lista pregunta x subcategoria  
    ListarPreguntaSubcategoria(req, res) {
        return pregunta.findAll({
            include:{
                model:sub,
               
            }
        
            
          })
            .then(pregunta => res.status( 200).send(pregunta))
            .catch(error => res.status(400).send(error));
    },

    CreatePregunta(req, res) {
       // let {usuario_id}=parseInt(req.body)
       // console.log(usuario_id)
        return pregunta.create({
            subcategoria_id:req.body.subcategoria_id,
            usuario_id:req.body.usuario_id,
            descripcion: req.body.descripcion,

           

        })
        .then(pregunta => res.status(200).send(pregunta))
            .catch(error => res.status(400).send(error))
    },
    UpdatePregunta(req, res) {
        return pregunta
            .update({
                descripcion: req.body.descripcion,
           
            }, {
                where: {
                    id_pregunta: req.params.id,
                },
            })

        .then((result) => {
                res.json(result);
            })
            .catch(error => res.status(400).send(error))
    },
    EliminarPregunta(req, res) {
        return pregunta.destroy({
            where: {
                id_pregunta: req.params.id
            }
        })

        .then(() => res.status(200).send('Eliminado'))
            .catch(error => res.status(400).send(error))
    },
    ViewPregunta(req, res) {

        return pregunta.findOne({
            where: {
                id_pregunta: req.params.id
            }
        })

        .then(pregunta => res.status(200).send(pregunta))
            .catch(error => res.status(400).send(error))
    }

}