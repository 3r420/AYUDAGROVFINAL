const Sequelize = require("sequelize");
const respuesta = require("../models").Respuesta;
const pregunta = require("../models").Pregunta;
const usuario = require("../models").Usuario;

module.exports = {
  ListarRespuesta(req, res) {
    return respuesta
      .findAll({
        //  include: {model:pre},require:'true',
      })
      .then((respuesta) => res.status(200).send(respuesta))
      .catch((error) => res.status(400).send(error));
  },
  RespuestaxUsuario(req,res){
    return respuesta
    .findOne({
      include:{model:usuario},
      where:{id_respuesta:req.params.id},
    })
    .then((respuesta)=>res.status(200).send(respuesta))
    .catch((error)=>res.status(400).send(error));
  },

  listarRespuestaXpregunta(req, res) {
    return respuesta
      .findOne({
        include: { model: pregunta },
        require: "true",
      })
      .then((respuesta)=>res.status(200).send(respuesta))
    .catch((error)=>res.status(400).send(error));
  },
  listarRespuestaXusuario(req, res) {
    return respuesta
      .findOne({
        include: { model: usuario},
        where:{id_respuesta:req.params.id},
        require: "true",
        // include: { model: usuario },
        // where:{id_respuesta:req.params.id},
        // require: "true",

      })
      .then((respuesta) => res.status(200).send(respuesta))
      .catch((error) => res.status(400).send(error));
  },

  ListarRespuestasPorPreguntaId(req, res) {
    return respuesta
      .findAll({
        where: {
          pregunta_id: req.params.id,
        },
      })
      .then((respuesta) => res.status(200).send(respuesta))
      .catch((error) => res.status(400).send(error));
  },

  CreateRespuesta(req, res) {
    return respuesta
      
      .create({
        pregunta_id: req.body.pregunta_id,
        usuario_id:req.body.usuario_id,
        descripcion: req.body.descripcion,
        hora_fecha: req.body.hora_fecha,
      })

      .then((respuesta) => res.status(200).send(respuesta))
      .catch((error) => res.status(404).send(error));
  },
  UpdateRespuesta(req, res) {
    return respuesta
      .update(
        {
          pregunta_id: req.body.pregunta_id,
          usuario_id: req.body.usuario_id,
          descripcion: req.body.descripcion,
          hora_fecha: req.body.hora_fecha,
        },
        {
          where: {
            id_respuesta: req.params.id,
          },
        }
      )

      .then((result) => {
        res.json(result);
      })
      .catch((error) => res.status(400).send(error));
  },
  EliminarRespuesta(req, res) {
    return respuesta
      .destroy({
        where: {
          id_respuesta: req.params.id,
        },
      })

      .then(() => res.status(200).send("Eliminado"))
      .catch((error) => res.status(400).send(error));
  },
  ViewRespuesta(req, res) {
    return respuesta
      .findOne({
        where: {
          id_respuesta: req.params.id,
        },
      })

      .then((respuesta) => res.status(200).send(respuesta))
      .catch((error) => res.status(400).send(error));
  },
};
